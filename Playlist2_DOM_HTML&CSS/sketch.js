let curve1;
let curve2;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  noFill(); stroke(0);
  curve1.beginShape();
  curve2.beginShape();
  //let x, y;

  for(let i = 0; i < 10; i++){
    curve1.curveVertex(10*i,10*i);
  }
  curve2.endShape();
  curve1.endShape();
}
