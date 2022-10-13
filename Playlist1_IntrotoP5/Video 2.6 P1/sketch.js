// Video 2.6 discusses the createGraphics function
// Basically this makes it so you can layer different kinds of animations
let x = 200;
let y = 200;
let extraCanvas;

function setup() {
  createCanvas(400, 400);
  background(0);
  extraCanvas = createGraphics(400,400);
  extraCanvas.background(255,0,0);
  extraCanvas.clear();
}

function draw() {
  background(0);

  // No trails!
  x += random(-5,5);
  y += random(-5,5);
  fill(255,200);
  stroke(255);
  rectMode(CENTER);
  rect(x,y,20,20);


  if (mouseIsPressed){
    extraCanvas.fill(255,10);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX,mouseY,60,60);
  }
  image(extraCanvas,0,0);

}
