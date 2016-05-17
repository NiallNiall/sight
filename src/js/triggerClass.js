
function createTrigger() {
  var privateAvailable = false;

  var trigger = {
    available: false,
    sendMessage: sendMessage,
    getPrivateAvailable: getPrivateAvailable
  };

  return trigger;

  function sendMessage() {
      console.log("send Message!");
  }

  function getPrivateAvailable() {
    return privateAvailable;
  }
}


function createDog() {
  var dog = createTrigger();

  dog.bark = function(){
      console.log("Woof!");
  };

  return dog;
}


var obj = {};



var dog = createDog();
dog.bark();
dog.sendMessage();





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