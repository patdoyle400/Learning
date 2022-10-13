function setup() {
  createCanvas(400, 400); // createCanvas(Width,Height)
}

function draw() {
  background(100,0,50); // background(RGB color code)
  //rectMode(CENTER)
  fill(0,0,255,100); 
  //stroke(0,255,0);
  noStroke()
  rect(10,10,50,50); // Rectangle(x-start,y-start,width,height...)

  fill(0,0,0); // All shapes after a fill/stroke command will be that same color. Have to apply fill/stroke to each shape if different colors are desired
  stroke(0,255,0);
  strokeWeight(10); // Adjusts width of stroke
  rect(340,340,50,50);

  fill(100,0,100); stroke(100,0,100);
  rect(340,10,50,50);

  noStroke()
  rect(10,340,50,50);

  //line(0,0,400,400); // line(x1,y1,x2,y2)
  //line(400,0,0,400);
  
}
