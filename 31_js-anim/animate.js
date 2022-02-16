// Team (Liu)^2 :: Sophie Liu, Qina Liu
// SoftDev pd2
// K31 -- Paint Paint Paint...
// 2022-02-15

// model for HTML5 canvas-based animation

// SKEELTON

//access canvas and buttons via DOM
var c = document.getElementById('playground');// GET CANVAS
var dotButton = document.getElementById('buttonCircle'); // GET DOT BUTTON
var stopButton = document.getElementById('buttonStop');// GET STOP BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");// YOUR CODE HERE

//set fill color to team color
ctx.fillStyle = "#8A2BE2"; // YOUR CODE HERE

var requestID;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
  // YOUR CODE HERE
};


var radius = 0;
var growing = true;


//var drawDot = function() {
var drawDot = () => {
  clear();
  console.log("drawDot invoked...")
  ctx.beginPath();
  ctx.arc(c.clientWidth/2, c.clientHeight/2, radius, 0, 2*Math.PI);
  ctx.fill();
  ctx.stroke();
  if (radius == (Math.min(c.clientWidth,c.clientHeight) / 2)) {
    growing = false;
  }
  if (radius == 0) {
    growing = true;
   }
  if (growing) {
    radius++;
  }
  else {
    radius--;
  }
  requestID = window.requestAnimationFrame(drawDot);
  // YOUR CODE HERE

  /*
    ...to
    Wipe the canvas,
    Repaint the circle,
    ...and somewhere (where/when is the right time?)
    Update requestID to propagate the animation.
    You will need
    window.cancelAnimationFrame()
    window.requestAnimationFrame()
   */
};


//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  requestID = window.cancelAnimationFrame(requestID);
  // YOUR CODE HERE
  /*
    ...to
    Stop the animation
    You will need
    window.cancelAnimationFrame()
  */
};

var clickity = false;
var clickTest = function() {
  if (!clickity) {
    clickity = true;
    drawDot();
  }
}
var clickTest2 = function() {
  if (clickity) {
    clickity = false;
    stopIt();
  }
}
dotButton.addEventListener( "click", clickTest );
stopButton.addEventListener( "click",  clickTest2 );
