//Starting to deal with animation (mouseX,mouseY)
//Video 2.2 - discusses defining variables
//1 - declare; 2 - initialize; 3 - use;

//Video 2.3 - Incremenation operators
// x = x + 5 -> x += 5 
// x = x + 1 -> x++ (only works for incrementing by ones or minus 1)
// x = x * 2 -> x*= 2 or divide

//Video 2.4 - random() function
//random(min,max);

// DECLARE
// let circleX = 100; // var might be able to be used; const also works
// let diam = 1;

let squareSize;
let lineWidth;

let x, y, r, g, b;

// Initialize in the setup section
function setup() {
  createCanvas(windowWidth, windowHeight);
  //circleX = 0; // This is assigning value 100 to circleX (assignment operation)
  lineWidth = random(2,10);
  background(0);
}

function draw() {
  
  // squareSize = random(50,100);
  // rectMode(CENTER);
  // strokeWeight(lineWidth);
  // stroke(0,0,255,10);
  // fill(0,255,0,10);
  // square(300,300, squareSize);

  r = random(255);
  g = random(255);
  b = random(255);
  x = random(width);
  y = random(height);
  noStroke();
  fill(r,g,b,100);
  circle(x,y,10)

  // From videos 2.2 and 2.3
  // noStroke();
  // fill(255);
  // ellipse(circleX,200,diam);
  // circleX*=1.1;
  // diam*=1;
}

function mousePressed() {
  //circleX = 10;
  //diam = 1;
}
