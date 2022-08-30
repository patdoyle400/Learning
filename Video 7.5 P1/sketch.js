// Video 7.5 introduces removing things from arrays

// 7.4 introduces mouse interaction with objects
let bubbles = [];


function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++){
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
    if (bubbles[i].contains(mouseX,mouseY)){
      bubbles[i].changeColor;
    }
    bubbles[i].move();
    bubbles[i].show();
  }

}

function mouseOver() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].contains(mouseX,mouseY);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++){
    if (bubbles[i].contains(mouseX,mouseY)){
      bubbles.splice(i,1);
    }
  }
}



// From video 6.4
class Bubble {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
  // Functions within a class don't need function call
  move() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }

  show() {
      stroke(255);
      strokeWeight(4);
      fill(this.brightness,100);
      ellipse(this.x,this.y,this.r*2);
  }


  changeColor() {
    this.brightness = 255;
  }

  contains(px,py) { 
      let d = dist(px, py, this.x, this.y);
      if (d < this.r) {
        this.brightness = 255;
        return true;
      } else {
        this.brightness = 0;
        return false;
      }
    }
}

