function createTrigger() {

  var available = true;

  var trigger = {
    available: true,
    triggerEvent: triggerEvent,
    triggerOff: triggerOff,
    triggerOn: triggerOn,
    getAvailable: getAvailable,
    setPitch: setPitch
  };

  return trigger;

  function triggerEvent() {

    if(available){
      // trigEventVar();
      sendMessage();
      triggerOff();
    }

  }

  function randomNote()
  {
      var text = "";
      var possible = "CEGA";

      for( var i=0; i < 1; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
  }

  function sendMessage() {
  	// console.log("Boom!");
  	var note = randomNote() + '4';
  	synth.triggerAttackRelease(note, "32n");
  }

  function triggerOff() {
    available = false;
  }

  function triggerOn() {
    available = true;
  }

  function getAvailable() {
    return available;
  }

  function setPitch(){

  }

  function setSynth(synthVar){

  }

}



function createTwig(constructPos, groupVar) {


	// Create an instance of a trigger
    var trigger = createTrigger();

	// Set Availability Boolean
    var available = true;
    // Create a copy to store previous state
    var oldAvailable = available;

	var position = constructPos;
	var leaf = new paper.Symbol();
	var movng = false;

	var rndFlip = randomIntFromInterval(-1,1)

	var leafFlipped = true;

	leaf = leafSym.place(constructPos);
	// Add the paths to the group:
	groupVar.addChild(leaf);

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
		loop: loop,
		leaf: leaf,
		setAvail: setAvail,
		checkDistance: checkDistance
	}

	// set Initial count to 0
	var testRot  = 3;
	// Set length of animation
	var animTime = 100;
	// Set amount of animation
	var animAmt = 120;


	leaf.rotation = easeOutExpo(testRot, 0, animAmt, animTime);
	
	function loop(){

		if(movng){
			if(testRot<animTime){
				testRot += 2;
				leaf.rotation = easeOutExpo(testRot, 0, animAmt, animTime);
			} else {
				testRot = 3;
				leaf.rotation = easeOutExpo(testRot, 0, animAmt, animTime);
				movng = false;
			}
		}

      
  }

  // Check the distance between passed Variable and this one.
  function checkDistance(testPosition) {
	
	var truePos = position.subtract(pivotPoint);
  	if(rndFlip < 0){
		truePos = position.subtract(pivotPoint);
	} else {
		truePos = position.add(pivotPoint);
	}
  	// var truePos = position.subtract(pivotPoint);
    var distGap = truePos.subtract(testPosition);
    var testResult = false;

    if(distGap.length < 10) {
      testResult = true;
    } else {
      testResult = false;
    }
    return testResult;
  }

  // Set the Twigs Availability
  function setAvail(availBit){
    available = availBit;
    if(oldAvailable == available){

    } else {
      if(!available) {
        console.log("out");
        triggerEvent();
      } else {
        console.log("in");
        triggerOn();
      }
    }
    oldAvailable = available;
  }

  function triggerEvent(){
      movng = true;
      trigger.triggerEvent();
  }

  function triggerOn(){
      trigger.triggerOn();
      // shapeOff();
  }

  return twig;

}