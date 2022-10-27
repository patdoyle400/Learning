


function Particle(){
  this.x = 100;
  this.y = 99;
  // this.show = function(){
  //   fill(255);
  //   strokeWeight(4);
  //   point(this.x,this.y);
  // }
}

// Calls 
function Confetti(){
  Particle.call(this); // Executes the constructor of Particle
}

//var p = new Particle(); // keyword: 'new' indicates to JS that it should execute this function as a constructor and make a new object & assign this object to keyword this
let v;
let c;

Particle.prototype.show = function(){
  strokeWeight(4);
  stroke(255);
  point(this.x,this.y);

}

let p;
let p2;

function setup() {
  createCanvas(800, 800);
  background(50);
  p = new Particle;
  p2 = new Particle();
  c = new Confetti();
  console.log(p);
  console.log(c);

  v = createVector(3,4);
}

function draw() {
  
  p.show();
}

p5.Vector.prototype.double = function(){
  this.x *=2;
  this.y *=2;
  this.z *=2;
}
