function createTrigger() {

  var available = true;

  function randomNote()
  {
      var text = "";
      var possible = "CEGA";

      for( var i=0; i < 1; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
  }

  var pitch = randomNote();

  var trigger = {
    available: true,
    triggerEvent: triggerEvent,
    triggerOff: triggerOff,
    triggerOn: triggerOn,
    getPrivateAvailable: getPrivateAvailable,
    setPitch: setPitch
  };

  return trigger;

  function triggerEvent() {

    if(available){
      sendMessage();
      triggerOff();
    }

  }

  function sendMessage() {
    console.log("send Message!");

    //play a middle c for the duration of an 8th note
    synth.triggerAttackRelease(pitch + "4", "16n");
  }

  function triggerOff() {
    available = false;
  }

  function triggerOn() {
    available = true;
  }

  function getPrivateAvailable() {
    return available;
  }

  function setPitch(){

  }

}

// =====================================================
// =====================================================


function createStep(constructPos) {

  var clr1 = 'Tomato';

    // var myCircle = new paper.Path.Circle(new paper.Point(100, 70), 50);
    // myCircle.fillColor = 'black';

    // var position

    var trigger = createTrigger();

    var position = constructPos;

    // var position = paper.Point.random().multiply(new paper.Point(paper.view.bounds.width, paper.view.bounds.height)); //new paper.Point(100,200);
    var myCircle = new paper.Path.Circle(position, 10);
    myCircle.fillColor = clr1;


  var step = {
    position: getPosition,
    // stepTrig: createTrigger,
    radius: Math.random() * 100,
    distanceTest: distanceTest,
    drawStep: drawStep
  }

  return step;

  function drawStep(){
  }

  function getPosition() {
    return position;
  }

  function distanceTest(testPosition) {

    var distGap = position.subtract(testPosition);
    // console.log(distGap.length);

    if(distGap.length < 25) {
      trigger.triggerEvent();
      // myCircle.fillColor = 'Black';
      myCircle.strokeColor = 'NavajoWhite';
      myCircle.strokeWidth = 15.0;
    } else {
      trigger.triggerOn();
      myCircle.fillColor = clr1;
      myCircle.strokeColor = null;
    }
  }

}





// function createSnareTrigger() {

//   var snare = createTrigger();

//   snare.bark = function(){
//       console.log("Woof!");
//   };

//   return snare;
// }



// var dog = createDog();
// dog.bark();
// dog.sendMessage();





// var Trigger = function (testVar) {
//   console.log(testVar + ' created!');

//   this.triggerName = testVar;
//   this.triggerAvail = true;
// };

// Trigger.prototype.triggerEvent = function(){


//     if (this.triggerAvail) {
//       this.triggerOff();
//       this.sendTrigger();
//     }


// };

// Trigger.prototype.sendTrigger = function(){
//   console.log(this.triggerName + " triggered!");
// };

// Trigger.prototype.triggerOff = function(){
//   this.triggerAvail = false;
// };

// Trigger.prototype.triggerOn = function(){
//   this.triggerAvail = true;
// };


// // ===============================================================
// // ===============================================================


// var drumStep = function () {

//   var drumTrigger = new Trigger("SuperTrig");

// };

// drumStep.prototype.drawTrig = function(){

// }

// drumStep.prototype.distanceTest = function(){

// }


// // ===============================================================
// // ===============================================================

// var snareStep = function() {
//   // this.setName("I'm SubClass1");
// }

// extend(snareStep, drumStep);