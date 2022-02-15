//   Team (Liu)^2 :: Sophie Liu, Qina Liu
//   SoftDev pd2
//   K30 -- JS Paint
//   2022-02-14
// --------------------------------------------------

// retrieve node in DOM via ID
let c = document.getElementById("slate");

// instantiate a CanvasRenderingContext2D object
let ctx = c.getContext("2d");

//init global state var
var mode = "rect";

var bToggler = document.getElementById("buttonToggle");
var clearB = document.getElementById("buttonClear");

var toggleMode = function(e) {
  if (mode == "rect") {
    bToggler.innerHTML = "Circle";
    mode = "circle";
    console.log(mode);
  }
  else {
    bToggler.innerHTML = "Rectangle";
    mode = "rect";
    console.log(mode);
  }
}

var drawRect = function(e){
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;
  console.log("mouseclick registered at ", mouseX, mouseY);
  ctx.beginPath();
  ctx.rect(mouseX, mouseY, 100, 200);
  ctx.fillStyle = "#8A2BE2";
  ctx.fill();
  ctx.stroke();
}

var drawCircle = function(e){
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  console.log("mouseclick registered at ", mouseX, mouseY);
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 75, 0, 2*Math.PI);
  ctx.fillStyle = "#48AAAD";
  ctx.fill();
  ctx.stroke();
}

var draw = function(e){
  if (mode === "rect"){
    return drawRect(e);
  }
  else {
    return drawCircle(e);
  }
}

var wipeCanvas = function(e) {
  ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
}

c.addEventListener("click", draw)
bToggler.addEventListener('click', toggleMode);
clearB.addEventListener("click", wipeCanvas);
