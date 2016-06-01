(function () { 'use strict';

}()); // end 'use strict'

//create one of Tone's built-in synthesizers and connect it to the master output
var synth = new Tone.SimpleSynth().toMaster();
synth.oscillator.type = "sine";


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
        // leaf = Item.place(new paper.Point(100,100));
        // console.log(leaf);
        // leaf.rotation = 45;
    });

    // Set scroller
    var countr = 1;



    // Create a vector for the playhead
    var playHeadPos = new paper.Point(paper.view.center);
    // and a vector for the Canvas Centre
    var centerPos = paper.view.center;
    var playHeadLength = 800;

    // Half Length Variable
    var halfPHLength = playHeadLength / 2;

    // Create Branch Object
    var branch = new paper.Path();

    var startPos = centerPos.x-halfPHLength;
    var endPos = centerPos.x+halfPHLength;

    var branch = new paper.Path();
    for(var i = startPos; i<endPos; i+=20){
      var x = i;
      var y = centerPos.y + randomIntFromInterval(-2, 3);
      branch.add(new Point(x, y));
    }

    branch.strokeColor = '#8E6008';
    branch.strokeWidth = '8.0';
    branch.strokeCap = 'round';

    // Create an top group:
    var baseGroup = new Group();
    // Create an top group:
    var midGroup = new Group();
    // Create an top group:
    var topGroup = new Group();

    // Create Playhead Object
    var playHead = new paper.Path.Circle(playHeadPos, 10);
    playHead.fillColor = 'Tomato';
    playHead.strokeColor = '#FCF7E9';
    playHead.strokeWidth = 5.0;

    // Add the paths to the group:
    topGroup.addChild(playHead);
    


    paper.view.onFrame = function(event) {

      if(countr < playHeadLength){
        countr += 2;
      } else {
        countr = 0;
      }

      playHeadPos = new paper.Point(centerPos.x - (playHeadLength/2) + countr, centerPos.y)
      playHead.position = playHeadPos;

      for(var i =0; i<allTwigs.length; i++){
        // console.log(counttt);
        allTwigs[i].loop();

        var distBool = allTwigs[i].checkDistance(playHeadPos);
        allTwigs[i].setAvail(!distBool);
      }

    }


    var mouseTool = new paper.Tool();

    mouseTool.onMouseDown = function(event) {
      // leaf = Item.place(event.point);
      var mouseXPos = event.point.x;
      var leftBoundary = centerPos.x-halfPHLength;
      var rightBoundary = centerPos.x+halfPHLength;
      if(mouseXPos > leftBoundary && mouseXPos < rightBoundary ) {
        var tempTwig = createTwig(new paper.Point(event.point.x, paper.view.center.y), midGroup);

        allTwigs.push(tempTwig);
      }
    }

    // Draw the view now:
    paper.view.draw();

  }









  