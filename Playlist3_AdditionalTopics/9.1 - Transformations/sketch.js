
let a = 0;
let b = 0;
let x = 50;
let y = 50;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  //rectMode(CENTER);
}

function draw() {
  background(0);
  // fill(255);
  
  // push();
  // translate(300,300);
  // rotate(b);
  // rect(x,y,50,50);
  // pop();

  // push();
  // translate(100,100); // Moves origin to 50,50
  // rotate(a);
  // rect(x,y,50,50);
  // pop();
 
  // a += 5;
  // b += 7;
  // //x += 0.1;
  
  push();
  translate(400,400);
  scale(2,-1);
  rotate(a);
  stroke(255);
  strokeWeight(4);
  fill(100);
  rect(0,0,200,200);
  pop();

  ellipse(300,300,60,60);

  a += .5;


}
