(function () { 'use strict';

}()); // end 'use strict'


// Converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};


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


    var getCirclePos = function(centerPos, inc, Radius) {

      var angle = Math.radians(inc);
      var x = centerPos.x + Math.sin(angle) * Radius;
      var y = centerPos.y + Math.cos(angle) * Radius;

      var pos = new paper.Point(x,y);

      return pos;

    }


    var rotrPos = new paper.Point(paper.view.center);

    var playHead = new paper.Path.Circle(rotrPos, 20);
    playHead.fillColor = 'LightSlateGray';

   var countr = 1;


    var dog = createStep();
    // console.log(dog.position());

    // var dog2 = createStep();
    // console.log(dog2.position());
    // dog2.triggerEvent();

    paper.view.onFrame = function(event) {
      // On each frame, rotate the path by 3 degrees:
      // dog.drawStep();

      countr +=2;

      var rotrPos = getCirclePos(paper.view.center, countr, 200);

      // rotrPos.x +=1;
      // rotrPos.y +=1;

      playHead.position = rotrPos;

    }

    var mouseTool = new paper.Tool();

   mouseTool.onMouseDown = function(event) {

    var dog = createStep(event.point);
    // console.log(event.point);
      // var myCircle = new paper.Path.Circle(event.point, 5);
      // myCircle.fillColor = 'black';
    }


    // Draw the view now:
    paper.view.draw();

  }


// var step1 = new drumStep();
// var person2 = new Trigger("UltraTrig");

// person1.triggerEvent();
// person2.triggerEvent();