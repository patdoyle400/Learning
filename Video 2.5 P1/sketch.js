// Video 2.5 discusses the map() function
// Map() uses input of some kind to map a value to a specific range/value

var col = 0;
var col2 = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  //Background
  col = map(mouseX,0,600,0,255);
  col2 = map(mouseY,0,400,255,0);
  background(col,col2,col);
  //ellipse
  fill(250,118,222);
  ellipse(mouseX,mouseY,64,64);
}
