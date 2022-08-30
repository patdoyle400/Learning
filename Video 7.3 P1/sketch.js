// Video 7.3 covers arrays of objects

let bubbles = [];

function setup() {
  createCanvas(600, 400);

  // for (let i = 0; i < 1000; i++){
  //   let x = random(width);
  //   let y = random(height);
  //   let r = random(10,40);
  //   bubbles[i] = new Bubble(x,y,r);
  

  // bubbles[0] = new Bubble(200,200,40);
  // bubbles[1] = new Bubble(400,200,20);
}

function draw() {
  background(0);

  // for-of iterates through a whole array without having to use an index
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();

  }
  // bubbles[0].move();
  // bubbles[1].move();
  // bubbles[0].show();
  // bubbles[1].show();
}

// Add bubbles everytime the mouse is pressed
function mouseDragged(){
  let r = random(10,50);
  let b = new Bubble(mouseX,mouseY,r);
  bubbles.push(b) = b; // Push adds something to an array (the end of an array)
}
