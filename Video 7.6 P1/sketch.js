// Video 7.6 introduces object communication
// Video 7.7 expands on object communication
let bubbles = [];
let unicorn;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 100; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10,50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }

  unicorn = new Bubble(400,200,10);

}

function draw() {
  background(0);
  // for (let i = 0; i < bubbles.length; i++){
  //   if (bubbles[i].contains(mouseX,mouseY)){
  //     bubbles[i].changeColor;
  //   }
  //   bubbles[i].move();
  //   bubbles[i].show();
  // }
  // let d = dist(bubble1.x,bubble1.y, bubble2.x, bubble2.y);
  // if (d < bubble1.r + bubble2.r){
  //   background(200,0,100);
  // }

  // if ( bubble1.intersects(bubble2)){
  //   background(200,0,100);
  // }

  for (let b of bubbles){
    b.show();
    b.move();
    let overlapping = false;
    for (let other of bubbles){
      if (b !==  other && b.intersects(other)){
        overlapping = true;
      } 
    }
    if (overlapping){
      b.changeColor(255);
    } else { 
      b.changeColor(0);
    }
  }

  unicorn.x = mouseX; 
  unicorn.y = mouseY;
  unicorn.show();
  

 

  

}

// function mouseOver() {
//   for (let i = 0; i < bubbles.length; i++) {
//     bubbles[i].contains(mouseX,mouseY);
//   }
// }

// function mousePressed() {
//   for (let i = 0; i < bubbles.length; i++){
//     if (bubbles[i].contains(mouseX,mouseY)){
//       bubbles.splice(i,1);
//     }
//   }
// }



// From video 6.4
class Bubble {
  constructor(x,y,r=50) {
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

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r)
    // if (d < this.r + other.r){
    //   return true;
    // } else {
    //   return false;
    // }
  }


  changeColor(bright) {
    this.brightness = bright;
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

