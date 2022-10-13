// Video 3.1 introduces conditional statements. Module 3 primarily deals with this

// If statement
//if('Boolean expression'){
//}

//if-else statement
//if('boolean'){
//}else{
//}

//else-if statements
//if(boolean){
//}elseif(boolean){
//}elseif(boolean)...

let x = 0;
var speed = 3;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();
  rectMode(CENTER);


  // if(mouseX>200 && mouseX<400){
  //   ellipse(300,200,100,100);
  // }
  // } else if(mouseX>150){
  //   rect(300,200,100,100);
  // } else if(mouseX>50){
  //   line(0,0,width,height);
  // } else {
  //   point(300,200);
  // }
  
  ellipse(x,200,100,100);
  // Video 3.2
  if(x>width || x<0){
    speed = -speed;
  }
  x += speed;
 
  // From 3.1
  // if(mouseX > 300){
  //   fill(255,0,200);
  // }


}
