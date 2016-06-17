function createVein(initialPos) {

  var veinPath = new paper.Path();
      // veinPath.strokeColor = 'Tomato';
      // veinPath.strokeWidth = 3.0;
      // veinPath.strokeCap = 'round';
      veinPath.add(initialPos);
      veinPath.add(initialPos);

  var veinPHPos = initialPos;
  var playHead = new paper.Path.Circle(veinPHPos, 8);
  playHead.fillColor = 'FireBrick';

  var playHeadPos = initialPos;

  // var startShape = new paper.Path.Circle(initialPos, 10);
  // startShape.fillColor = 'Tomato';

  // var endShape = new paper.Path.Circle(initialPos, 10);
  // endShape.fillColor = 'Tomato';

  var vein = {
    veinPath: veinPath,
    addPoints: addPoints,
    loop: loop,
    playHeadPos: playHeadPos,
    getPHPos: getPHPos
  }


  function addPoints(pointPos) {
      var segLength = veinPath.segments.length-1;
      var getLastPos = veinPath.segments[segLength].point;

      veinPath.add(pointPos);
      // endShape.position = pointPos;

      var line = new Path.Line(getLastPos, pointPos);
      line.strokeColor = Color.random();
      line.strokeWidth = 8.0;
      line.strokeCap = 'round';

      // console.log(line);



       var randomBranch = Math.random() < 0.2 ? true: false;

      // var randomNumber = Math.random() >= 0.5;
      // console.log(randomNumber);

      if(randomBranch){
          makeSmallBranch(getLastPos, pointPos);
      }

      // var branchTest = randomIntFromInterval(0,2);

      // var randomNumber = Math.random() >= 0.5;
      // console.log(randomNumber);

      // if(randomNumber){
      //     makeSmallBranch(getLastPos, pointPos);
      // }
  }


  function makeSmallBranch(thisPos, prevPos){

      var smlBranchStart = thisPos;
      var smlBranchEnd = prevPos;//new paper.Point(thisPos.x, thisPos.y);


      var tempVec = smlBranchEnd.subtract(smlBranchStart);
      var perpVecR = new paper.Point(tempVec.x-tempVec.y*-1, tempVec.y-tempVec.x);
      var perpVecL = new paper.Point(tempVec.x-tempVec.y, tempVec.y-tempVec.x*-1);

      var dirVecR = perpVecR.normalize();

      var dirVecL = perpVecL.normalize();
      // console.log(dirVec);

      var newEndR = smlBranchStart.add(dirVecR.multiply(75));

      var smlBranchR = new Path.Line(smlBranchStart, newEndR);
      smlBranchR.strokeColor = Color.random();
      smlBranchR.strokeWidth = 8.0;
      smlBranchR.strokeCap = 'round';

      var newEndL = smlBranchStart.add(dirVecL.multiply(75));

      var smlBranchL = new Path.Line(smlBranchStart, newEndL);
      smlBranchL.strokeColor = Color.random();
      smlBranchL.strokeWidth = 8.0;
      smlBranchL.strokeCap = 'round';
  }


  var pointPos = 0.001;

  function loop() {

      if(pointPos <= 1){
        pointPos += 0.005;
      } else {
        pointPos = 0.001;
      }

      // console.log(pointPos);

      movePlayhead(veinPath, pointPos);
  }

  function movePlayhead(tempVein, tempPointPos) {

    var getLength = tempVein.length;
    // console.log(getLength);
    var pos = getLength * tempPointPos;

    playHeadPos = tempVein.getPointAt(pos);
    playHead.position = playHeadPos;
  }

  function getPHPos() {
    var rtnPos = playHeadPos;

    return rtnPos;

  }

  return vein;

}

// =====================================================
// =====================================================

