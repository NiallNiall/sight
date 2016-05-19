(function () { 'use strict';

}()); // end 'use strict'


// Converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

//create one of Tone's built-in synthesizers and connect it to the master output
var synth = new Tone.SimpleSynth().toMaster();
synth.oscillator.type = "sine";

var snare = new Tone.SimpleSynth().toMaster();
snare.oscillator.type = "triangle";

// console.log(synth.oscillator.type);


paper.install(window);
  // Only executed our code once the DOM is ready.
  window.onload = function() {
    // Get a reference to the canvas object
    var canvas = document.getElementById('paperCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    // Create a Paper.js Path to draw a line into it:
    // var myCircle = new paper.Path.Circle(new paper.Point(100, 70), 50);
    // myCircle.fillColor = 'black';


    var selectr = 1;

    var phRadius = 200;

    var getCirclePos = function(centerPos, inc, Radius) {
      var angle = Math.radians(inc);
      var x = centerPos.x + Math.sin(angle) * Radius;
      var y = centerPos.y + Math.cos(angle) * Radius;
      var pos = new paper.Point(x,y);
      return pos;
    }


    var rotrPos = new paper.Point(paper.view.center);

    var playHeadPath = new paper.Path.Circle(paper.view.center, phRadius);
    playHeadPath.strokeColor = 'NavajoWhite';
    playHeadPath.strokeWidth = 5.0;

    var playHead = new paper.Path.Circle(rotrPos, 20);
    playHead.fillColor = 'LightSlateGray';

    var countr = 1;

    var allSteps = [];

    var counttt = 1;

    paper.view.onFrame = function(event) {
      // On each frame, rotate the path by 3 degrees:
      // dog.drawStep();

      countr +=2;

      var rotrPos = getCirclePos(paper.view.center, countr, phRadius);

      playHead.position = rotrPos;


      counttt +=1;
      for(var i =0; i<allSteps.length; i++){
        // console.log(counttt);
        allSteps[i].distanceTest(rotrPos);
      }

    }

      var mouseTool = new paper.Tool();

    mouseTool.onMouseDown = function(event) {

      switch(selectr) {
          case 1:
                    var newStep = createKick(event.point);
              break;
          case 2:
                    var newStep = createSnare(event.point);
              break;
          default:
                    var newStep = createKick(event.point);
      }

         allSteps.push(newStep);

    }


    mouseTool.onKeyDown = function(event) {

       switch(event.key) {
          case '1':
                          selectr = 1;
              break;
          case '2':
                          selectr = 2;
              break;
          default:
                   selectr = 1;
      }

    }





    // Draw the view now:
    paper.view.draw();

  }


// var step1 = new drumStep();
// var person2 = new Trigger("UltraTrig");

// person1.triggerEvent();
// person2.triggerEvent();