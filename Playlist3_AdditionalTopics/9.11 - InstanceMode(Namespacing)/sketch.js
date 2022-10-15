




var sketch = function(p){
  p.x = 100;
  p.y = 100;
  p.setup = function(){
    p.createCanvas(400,400);
    p.background(50);
  }
  p.draw = function(){
    p.fill(255,0,200,25);
    p.noStroke();
    p.ellipse(p.x,p.y,48,48);
    p.x = p.x + p.random(-15,15);
    p.y = p.y + p.random(-15,15);
  }
}
var myp51 = new p5(sketch);
var myp52 = new p5(sketch);

setInterval(resetBackground, 3000);

function resetBackground(){
  myp51.x = myp51.width/2;
  myp51.y = myp51.height/2;
  myp51.background(50);
}


// function setup() {
//   createCanvas(400, 400);
//   x = width/2;
//   y = height/2;
//   background(50);
// }

// function draw() {
//   fill(255,0,200,25);
//   noStroke();
//   ellipse(x,y,48,48);
//   x = x + random(-15,15);
//   y = y + random(-15,15);
  
// }
