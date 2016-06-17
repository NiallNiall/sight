(function () { 'use strict';

}()); // end 'use strict'

var fbDelay = new Tone.FeedbackDelay("8n", 0.4).toMaster();

//create one of Tone's built-in synthesizers and connect it to the master output
var synth = new Tone.SimpleSynth().connect(fbDelay);
synth.oscillator.type = "triangle";



paper.install(window);
  // Only executed our code once the DOM is ready.
  window.onload = function() {

    // Get a reference to the canvas object
    var canvas = document.getElementById('paperCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);


    // Create an empty array of twigs
    var allTwigs = [];

    project.importSVG('/img/leaf.svg', function(item) {

        // Scale the Twig down
        item.scale(0.15, -0.15);
        // item.rotate(140);
        leafSym = new Symbol(item);
    });

    // Set scroller
    var countr = 1;



    // and a vector for the Canvas Centre
    var centerPos = paper.view.center;

    // Create Branch Object
    var branch = new paper.Path();

    var branch = new paper.Path();

    branch.add(view.center);
    branch.add(view.center);

    branch.strokeColor = '#8E6008';
    branch.strokeWidth = '8.0';
    branch.strokeCap = 'round';

    // Create an top group:
    var baseGroup = new Group();
    // Create an top group:
    var midGroup = new Group();
    // Create an top group:
    var topGroup = new Group();


    var pointPos = 0.01;

    paper.view.onFrame = function(event) {

      if(pointPos <= 1){
        pointPos += 0.005;
      } else {
        pointPos = 0.001;
      }


      for(var i = 0; i <veins.length; i++){
        veins[i].loop();

      }

    }

    var veins = [];


    var mouseTool = new paper.Tool();



    mouseTool.onMouseDown = function(event) {
        var newBranch = createVein(event.point);
        veins.push(newBranch);
    }

    mouseTool.onMouseDrag = function(event) {
        var tempBranch = veins[veins.length-1];
        tempBranch.addPoints(event.point);
    }

    mouseTool.onMouseUp = function(event) {

    }

    // Draw the view now:
    paper.view.draw();

  }









