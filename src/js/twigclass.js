function createTwig(constructPos) {

	var position = constructPos;
	var leaf = new paper.Symbol();
	var moving = true;

	var rndFlip = randomIntFromInterval(-1,1)

	var leafFlipped = true;

	leaf = leafSym.place(constructPos);
	if(rndFlip < 0){
		leaf.scaling = (-1,-1);
	} else {
		leaf.scaling = (1, 1);
	}

	var pivotPoint = new paper.Point(-28,0);
	leaf.pivot = pivotPoint;

	// Create twig object and functions
	var twig = {
		position: position,
		loop, loop,
		leaf, leaf
	}

	// set Initial count to 0
	var testRot  = 0;
	// Set length of animation
	var animTime = 100;
	// Set amount of animation
	var animAmt = 120;

	function loop(){

		if(testRot<animTime){
			testRot += 1;

		} else {
			testRot = 0;
		}
		// var pivotPoint = new paper.Point(-28,0);
		// leaf.pivot = pivotPoint;
      // testCircle.position = leaf.position;
      leaf.rotation = easeOutExpo(testRot, 0, animAmt, animTime);
  }

  return twig;

}