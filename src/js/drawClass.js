function createVein(initialPos) {

  var veinPath = new paper.Path();
      veinPath.strokeColor = 'Tomato';
      veinPath.strokeWidth = 3.0;
      veinPath.strokeCap = 'round';
      veinPath.add(initialPos);
      veinPath.add(initialPos);

  var veinPHPos = initialPos;
  var playHead = new paper.Path.Circle(veinPHPos, 8);
  playHead.fillColor = 'FireBrick';

  var startShape = new paper.Path.Circle(initialPos, 10);
  startShape.fillColor = 'Tomato';

  var endShape = new paper.Path.Circle(initialPos, 10);
  endShape.fillColor = 'Tomato';

  var vein = {
    veinPath: veinPath,
    addPoints: addPoints,
    loop: loop
  }


  function addPoints(pointPos) {
    veinPath.add(pointPos);
    endShape.position = pointPos;
  }

  var pointPos = 0.001;

  function loop() {

      if(pointPos <= 1){
        pointPos += 0.005;
      } else {
        pointPos = 0.001;
      }

      // console.log(pointPos);

      getPHpos(veinPath, pointPos);
  }

  function getPHpos(tempVein, tempPointPos) {

    var getLength = tempVein.length;
    // console.log(getLength);
    var pos = getLength * tempPointPos;

    playHeadPos = tempVein.getPointAt(pos);
    playHead.position = playHeadPos;
  }


  return vein;

}

// =====================================================
// =====================================================
