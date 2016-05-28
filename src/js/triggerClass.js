function createTrigger() {

  var available = true;

  // function randomNote()
  // {
  //     var text = "";
  //     var possible = "CEGA";

  //     for( var i=0; i < 1; i++ )
  //         text += possible.charAt(Math.floor(Math.random() * possible.length));

  //     return text;
  // }

  // var pitch = randomNote();

  var trigger = {
    available: true,
    triggerEvent: triggerEvent,
    triggerOff: triggerOff,
    triggerOn: triggerOn,
    getPrivateAvailable: getPrivateAvailable,
    setPitch: setPitch
  };

  return trigger;

  function triggerEvent(trigEventVar) {

    if(available){
      trigEventVar();
      sendMessage();
      triggerOff();
    }

  }

  function sendMessage() {
    // console.log("Note Triggered!");
    // synthVar.triggerAttackRelease("16n");
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

  function setSynth(synthVar){

  }

}

// =====================================================
// =====================================================


function createStep(constructPos, clr) {

    var trigEvent = function(){
    };

    var setTrigEvent = function(trigEventVar) {
      trigEvent = trigEventVar;
    }

    var clr1 = clr;

    var trigger = createTrigger();

    var position = constructPos;
    var myCircle = new paper.Path;

    function createShape(shape){
      myCircle = shape;
    }


  var step = {
    position: getPosition,
    // stepTrig: createTrigger,
    radius: Math.random() * 100,
    distanceTest: distanceTest,
    drawStep: drawStep,
    createShape: createShape,
    setTrigEvent: setTrigEvent
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
      trigger.triggerEvent(trigEvent);
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

function createSnare(constructPos) {

    var snareStep = createStep(constructPos, 'Tomato');
    radius = 20;

    function createShape(constructPos) {
      var myShape = new paper.Path.Rectangle(constructPos.subtract(radius/2), radius);
      return myShape;
    }

    var trigEventVar = function(){
      console.log("Snare Triggered!");
      snare.triggerAttackRelease("32n");
    }

    snareStep.setTrigEvent(trigEventVar);

    var myShape = createShape(constructPos);
    snareStep.createShape(myShape);

    return snareStep;

}

function createKick(constructPos) {

    var kickStep = createStep(constructPos, 'DarkCyan');
    radius = 20;

    function createShape(constructPos) {
      var myShape = new paper.Path.Circle(constructPos, 10);
      return myShape;
    }

    var trigEventVar = function(){
      console.log("Kick Triggered!");
        kick.triggerAttackRelease("C2", "32n");
    }

    kickStep.setTrigEvent(trigEventVar);

    var myShape = createShape(constructPos);
    kickStep.createShape(myShape);

    return kickStep;

}


function createPulse(constructPos) {

    var kickStep = createStep(constructPos, 'DarkCyan');
    radius = 20;


    var trigEventVar = function(){
      // console.log("Kick Triggered!");
        synth.triggerAttackRelease("C4", "32n");
    }

    kickStep.setTrigEvent(trigEventVar);

    function createShape(constructPos) {
      var from = new Point(view.center.x, view.center.y);
      var to = new Point(constructPos.x, constructPos.y);
      var path = new Path.Line(from, to);
      path.strokeColor = 'Blue';
      path.strokeWidth = '5.0';
      return path;
    }

    var myShape = createShape(constructPos);
    kickStep.createShape(myShape);

    return kickStep;

}

function createMovr(constructPos) {

  var myShape = new paper.Path();
  var originalPos = constructPos;

  var center = paper.view.center;
  // console.log(center);

  var norm = constructPos.subtract(center);
  var normed = norm.normalize();

  var dest = new paper.Point(originalPos.x + normed.x * 100, originalPos.y + normed.y * 100);

  var from = originalPos;
  var to = dest;
  var movePath = new Path.Line(from, to);
  movePath.strokeColor = 'NavajoWhite';
  movePath.strokeWidth = '5.0';


  // console.log(normed);

  var movng = false;

  var life = 1;

   var movr = {
    shape: thisShape,
    create: create,
    loop: loop,
    start: start
  }
  // create(constructPos);

  var thisShape = create(constructPos);

  function create(constructPos) {
    myShape = new paper.Path.Circle(constructPos, 10);
    myShape.fillColor = 'SaddleBrown';
    return myShape;
    // movng = true;
  }

  var dist = 0;

  function loop(rotrPos) {
    if(movng){
      dist = easeOutExpo(life, 0, 100, 100)
      var newPos = new paper.Point(originalPos.x + (normed.x * dist), originalPos.y + (normed.y * dist));
      var startPos = new paper.Point(originalPos.x - (normed.x * dist), originalPos.y - (normed.y * dist));
      movePath.segments[1].point = newPos;
      movePath.segments[0].point = startPos;
      // console.log(movePath.segments[1].point);
      thisShape.position = newPos;

      life += 1;
      if(dist >= 100){
        // dist = 0;
        life = 0;
        thisShape.position = originalPos;
        movng = false;
      }
      // console.log(originalPos);
    }

    distanceTest(rotrPos);
  }

  function start() {
    life = 0;
    movng = true;
  }


function distanceTest(testPosition) {

    var distGap = originalPos.subtract(testPosition);
    // console.log(distGap.length);

    if(distGap.length < 25) {
      start();
    } else {

    }
  }

  return movr;

}


// t: current time, b: begInnIng value, c: change In value, d: duration
function easeInQuad(t, b, c, d) {
    return c*(t/=d)*t + b;
}

function easeInOutExpo(t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
function easeInExpo(t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  }
function  easeOutExpo(t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
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