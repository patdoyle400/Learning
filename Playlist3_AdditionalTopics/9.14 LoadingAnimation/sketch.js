function setup() {
  createCanvas(400, 400);
  //console.log(floor(millis())+'milliseconds');
}
let angle = 0;

function draw() {
  background(20);

  translate(width/2,height/2);
  strokeWeight(4);
  rotate(angle);
  stroke(255);
  line(0,0,100,0);
  //angle += .1;
}
