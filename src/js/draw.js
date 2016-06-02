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
    // for(var i = startPos; i<endPos; i+=20){
    //   var x = i;
    //   var y = centerPos.y + randomIntFromInterval(-2, 3);
    //   branch.add(new Point(x, y));
    // }

    branch.add(view.center);
    branch.add(view.center);
    // branch.add(new paper.Point(startPos, view.center.y));
    // branch.add(new paper.Point(endPos, view.center.y));

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
    var playHead = new paper.Path.Circle(playHeadPos, 15);
    playHead.fillColor = 'Tomato';
    playHead.strokeColor = '#FCF7E9';
    playHead.strokeWidth = 5.0;

    // Add the paths to the group:
    topGroup.addChild(playHead);


    var pointPos = 0.01;

    paper.view.onFrame = function(event) {

      if(pointPos <= 1){
        pointPos += 0.005;
      } else {
        pointPos = 0.001;
      }

      var tempBranch = branches[branches.length-1];

      var getLength = tempBranch.length;
      // console.log(getLength);
      var pos = getLength * pointPos;


      playHeadPos = tempBranch.getPointAt(pos);
      // console.log(pointPos);
      playHead.position = playHeadPos;


    }

    var branches = [];

    // var newBranch = new paper.Path();
    //     newBranch.add(startPos);
    //     newBranch.add(endPos);
    //     newBranch.strokeColor = 'Black';
    //     branches.push(newBranch);

    var mouseTool = new paper.Tool();



    mouseTool.onMouseDown = function(event) {
        var newBranch = new paper.Path();
        newBranch.strokeColor = 'Black';
        newBranch.strokeWidth = 3.0;
        newBranch.strokeCap = 'round';
        branches.push(newBranch);
    }

    mouseTool.onMouseDrag = function(event) {
        var tempBranch = branches[branches.length-1];
        console.log(tempBranch);
        tempBranch.add(event.point);
      // branch.add(event.point);
      // branch.add(paper.view.center);

    }

    mouseTool.onMouseUp = function(event) {
        // Add the mouse up position:
        // path.add(event.point);
    }

    // Draw the view now:
    paper.view.draw();

  }









