(function () { 'use strict';

}()); // end 'use strict'

  // Only executed our code once the DOM is ready.
  window.onload = function() {
    // Get a reference to the canvas object
    var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    // Create a Paper.js Path to draw a line into it:
    // var myCircle = new paper.Path.Circle(new paper.Point(100, 70), 50);
    // myCircle.fillColor = 'black';



    var dog = createStep();
    console.log(dog.position());

    var dog2 = createStep();
    console.log(dog2.position());
    // dog2.triggerEvent();

    paper.view.onFrame = function(event) {
      // On each frame, rotate the path by 3 degrees:
      // dog.drawStep();
    }

    var mouseTool = new paper.Tool();

   mouseTool.onMouseDown = function(event) {
    // console.log(event.point);
      var myCircle = new paper.Path.Circle(event.point, 5);
      myCircle.fillColor = 'black';
    }


    // Draw the view now:
    paper.view.draw();

  }


// var step1 = new drumStep();
// var person2 = new Trigger("UltraTrig");

// person1.triggerEvent();
// person2.triggerEvent();