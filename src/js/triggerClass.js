function createTrigger() {

  var available = true;

  var trigger = {
    available: true,
    triggerEvent: triggerEvent,
    triggerOff: triggerOff,
    triggerOn: triggerOn,
    getPrivateAvailable: getPrivateAvailable
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
  }

  function triggerOff() {
    available = false;
  }

  function triggerOn() {
    available = True;
  }

  function getPrivateAvailable() {
    return available;
  }

}

// =====================================================
// =====================================================


function createStep() {

    // var myCircle = new paper.Path.Circle(new paper.Point(100, 70), 50);
    // myCircle.fillColor = 'black';

    // var position

    var trigger = createTrigger();

    var position = paper.Point.random().multiply(new paper.Point(paper.view.bounds.width, paper.view.bounds.height)); //new paper.Point(100,200);
    var myCircle = new paper.Path.Circle(position, 10);
    myCircle.fillColor = 'black';


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
    console.log(distGap);

    if(distMag < 50) {
      trigger.triggerEvent();
    } else {
      trigger.triggerOn();
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