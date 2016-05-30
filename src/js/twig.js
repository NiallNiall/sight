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
    var testCircle = new paper.Path.Circle(new paper.Point(100, 70), 5);
    testCircle.fillColor = 'black';

    var Item = new Symbol();
    var leaf = new Symbol();

    project.importSVG('/img/leaf.svg', function(item) {
                      // console.log(item);
                      item.scale(0.15, -0.15);
                      // item.rotate(140);
                      Item = new Symbol(item);
                      leaf = Item.place(new paper.Point(100,100));
                      console.log(leaf);
                      // leaf.rotation = 45;
                  });



    var testRot  = 0;

    paper.view.onFrame = function(event) {

      var animTime = 100;
      var animAmt = 120;

      if(testRot<animTime){
        testRot += 1;

      } else {
        testRot = 0;
      }
      var pivotPoint = new paper.Point(-28,0);
      leaf.pivot = pivotPoint;
      testCircle.position = leaf.position;
      // testRot = easeInOutExpo(testRot, 0, 360, 360);
      leaf.rotation = easeOutExpo(testRot, 0, animAmt, animTime);
    }


    var mouseTool = new paper.Tool();

    mouseTool.onMouseDown = function(event) {
      leaf = Item.place(event.point);
    }


    // Draw the view now:
    paper.view.draw();

  }









  