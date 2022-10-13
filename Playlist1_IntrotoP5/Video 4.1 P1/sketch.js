// Video 4.1 discusses while and for loops
// Video 4.2 discusses nested loops

//while(boolean){}
//for(var; exit condition (x<value); iteration amount)

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  var x = 0; // This is now a local variable and thus can only be used in draw
  //var y = 0;
  // while (x <= width) {
  //   ellipse(x,200,25,25);
  //   ellipse(300,x,25,25);
  //   x = x + 50;
  // }

  for (var x = 0; x <= mouseX; x = x + 50){
    for (var y = 0; y <= mouseY; y = y + 50){
      fill(random(255),0,200);
      ellipse(x,y,25,25);
      //fill(0,200,random(255));
      //ellipse(300,x,25,25);
    }
  }

  // ellipse(x,200,25,25);
  // x = x + 50;
  // ellipse(x,200,25,25);
  // x = x + 50;
  // ellipse(x,200,25,25);
  // x = x + 50;
  // ellipse(x,200,25,25);
  // x = x + 50;
  // ellipse(x,200,25,25);
  // x = x + 50;
  // ellipse(x,200,25,25);

}
