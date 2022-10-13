// Video 6.1 was a brief intro to object oriented programming
// Video 6.2 introduces classes

// 'new' means to create a new object

// within a class, use the function constructor()... essentially the object's 'setup'
// objects are a collection of data and functionality

// Video 6.3 covers constructor arguments

// Video 6.4 covers adding JavaScript files

let bubble1, bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200,200,40);
  bubble2 = new Bubble(400,200,20);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}
// Moved for 6.4
// class Bubble {
//   constructor(x,y,r) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//   }
//   // Functions within a class don't need function call
//   move() {
//     this.x = this.x + random(-1,1);
//     this.y = this.y + random(-1,1);
//   }

//   show() {
//     stroke(255);
//     strokeWeight(4);
//     noFill();
//     ellipse(this.x,this.y,this.r*2);
//   }
// }


// function show(){
//   stroke(255);
//   strokeWeight(4);
//   noFill();
//   ellipse(bubble.x, bubble.y, 24,24);
// }

// function move() {
//   bubble.x = bubble.x + random(-1,1);
//   bubble.y = bubble.y + random(-1,1);
// }


