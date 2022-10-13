// Video 3.4 discusses boolean variables and creating a variable
// to track the state of a button

//Function mouseIsPressed -> true or false
//Event mousePressed

// Conditional: Not operator !

var on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  //background(0);
  if (on) {
    background(0,255,0);
  } else {
    background(0);
  }

  stroke(255);
  strokeWeight(4);
  noFill();
  rectMode(CENTER);
  rect(300,200,100,100);

  // Fills color of rectangle when mouse is within the rectangle
  // This is called a rollover (?)
  // if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
  //   if (mouseIsPressed){
  //     background(0,255,0);
  //   }
  //   fill(255,0,200);
  // }

}
// Making a toggle!
function mousePressed(){
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){ //Location
    // if (on) {// If the 'light' is on we want to turn it off
    //   on = false;
    // } else {// If the 'light' is off we want to turn it on
    //   on = true;
    // }
    on = !on; // Changes the state of variable on (not true -> false)
  }
}
