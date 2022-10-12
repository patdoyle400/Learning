
var canvas;
var bgcolor;
var button;
var slider;
var nameInput;
var nameP;

function setup() {
  canvas = createCanvas(400, 400);
  bgcolor = color(200);
  nameP = createP('Your name!');
  //canvas.mouseOver(overpara);


  button = createButton("go");
  button.mousePressed(changeColor);
  slider = createSlider(0,100,100);
  nameInput = createInput('Type your name');

  nameP.mouseOver(overpara);
  nameP.mouseOut(outpara);

  nameInput.input(updateText);
}

function draw() {
  background(bgcolor);
  //rectMode(CENTER);
  fill(255,0,0);
  ellipse(200,200,1.5*slider.value(),2*slider.value());
  //nameP.html(nameInput.value());
  console.log(nameInput.value())
}

function changeColor(){
  bgcolor = color(random(255));
}

function overpara(){
  nameP.html('Your mouse is over me!');
}

function outpara(){
  nameP.html('Your mouse is out!');
}

function updateText() {
  nameP.html(nameInput.value())
}