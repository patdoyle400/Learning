// 7.4 introduces mouse interaction with objects
let bubbles = [];


function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10,50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
  
}

function draw() {
  background(0);
  
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX,mouseY);
  }
}


