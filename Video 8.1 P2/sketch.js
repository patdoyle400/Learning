// 8.1 'What is HTML?' Covers the basics of HTML in the context of DOM manipulation
// Hypertext Markup Language

let canvas;
// let h1;

// 8.4 below
var bgcolor;
var button;

function setup() {
  canvas = createCanvas(400, 400);

  //canvas.position(400,500);
  //createP("hello");
  //h1 = createElement('h1','Waiting.');
  //h1.position(400,600)
  //createButton("what the")

  // 8.4 below
  bgcolor = color(200);
  button = createButton("go go go");
  button.mousePressed(changeColor);


}

let y = 200;
let x = 200;
function draw() {
  background(bgcolor);
  //clear();
  fill(255,0,0);
  rectMode(CENTER);
  rect(x,y,50,50);
  //h1.position(x,y);
  //x = x + random(-5,5);
}

// function mousePressed(){ // "global" function works for anywhere on the page
//   //h1.html("hi")
//   //createP("Hello " + random(0,10));

//   //8.4 below
//   changeColor();
  
// }

function changeColor(){
  bgcolor = color(random(255),random(255),random(255));
}