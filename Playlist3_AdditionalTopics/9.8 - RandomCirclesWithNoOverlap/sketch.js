
let circles = [];
let protection = 0;

function setup() {
  createCanvas(800, 800);
  background(220);

  while(circles.length < 60000){
  //for(let i = 0; i<25; i++){

    let circle = {
      x: random(width),
      y: random(height),
      r: random(10,30)
    }

    let overlapping = false;

    
    for(let j = 0; j<circles.length; j++){
      let other = circles[j];
      let d = dist(circle.x,circle.y,other.x,other.y);
      if(d < circle.r + other.r){
        overlapping = true;
        break;
      }
    }

    if(!overlapping){
      circles.push(circle);
    }
    protection++;
    if(protection > 10000){
      break;
    }
  }
  for(let i = 0; i<circles.length;i++){
    fill(255,0,150,100);
    noStroke();
    ellipse(circles[i].x,circles[i].y,circles[i].r*2,circles[i].r*2);
  }
}

function draw() {
  //background(220);
}
