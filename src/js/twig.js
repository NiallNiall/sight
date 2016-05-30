(function () { 'use strict';

}()); // end 'use strict'



paper.install(window);
  // Only executed our code once the DOM is ready.
  window.onload = function() {

    // Get a reference to the canvas object
    var canvas = document.getElementById('paperCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);


    // Create an empty array of twigs
    var allTwigs = [];

    var Item = new Symbol();
    // var leaf = new Symbol();

    project.importSVG('/img/leaf.svg', function(item) {
        // console.log(item);
        item.scale(0.15, -0.15);
        // item.rotate(140);
        leafSym = new Symbol(item);
        // leaf = Item.place(new paper.Point(100,100));
        // console.log(leaf);
        // leaf.rotation = 45;
    });



    // var testRot  = 0;

    paper.view.onFrame = function(event) {

      for(var i =0; i<allTwigs.length; i++){
        // console.log(counttt);
        allTwigs[i].loop();
      }

    }


    var mouseTool = new paper.Tool();

    mouseTool.onMouseDown = function(event) {
      // leaf = Item.place(event.point);
      var tempTwig = createTwig(event.point);
      allTwigs.push(tempTwig);
    }

    // Draw the view now:
    paper.view.draw();

  }









  