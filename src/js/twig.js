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

    var Item = new Symbol();
    var leaf = new Symbol();

    project.importSVG('/img/leaf.svg', function(item) {
                      // console.log(item);
                      item.scale(0.15);
                      // item.rotate(140);
                      Item = new Symbol(item);
                      leaf = Item.place(new paper.Point(100,100));
                      console.log(leaf);
                      // leaf.rotation = 45;
                  });



    var testRot  = 0;

    paper.view.onFrame = function(event) {

      if(testRot<360){
        testRot += 1;

      } else {
        testRot = 0;
      }
              // testRot = easeInOutExpo(testRot, 0, 360, 360);
              leaf.rotation = easeInOutExpo(testRot, 0, 360, 360);
      // console.log(leaf);
      // leaf.rotation = 45;// = paper.view.center;

    }


    // Draw the view now:
    paper.view.draw();

  }



  // t: current time, b: begInnIng value, c: change In value, d: duration
function easeInQuad(t, b, c, d) {
    return c*(t/=d)*t + b;
}

function easeInOutExpo(t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
function easeInExpo(t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  }
function  easeOutExpo(t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  }