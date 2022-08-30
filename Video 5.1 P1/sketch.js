// Video 5.1 introduces functions and syntax for them
// Functions improve code modularity and reusability

// Video 5.2 explains using parameters and arguments in functions

var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  lollipop(300,200,200);
  //lollipop(random(0,600),50,random(0,1000));  
}

function lollipop(x,y,diameter){
  fill(0,200,255);
  rect(x-10,y,20,150);

  fill(255,0,200);
  ellipse(x,y,diameter);
}

//   // Everything below here can be made into 3 different functions
//   move();
//   bounce();
//   display();


//   // stroke(255);
//   // strokeWeight(4);
//   // noFill();
//   // ellipse(ball.x, ball.y, 24,24);

//   // if (ball.x > width || ball.x < 0){
//   //   ball.xspeed = ball.xspeed * -1;
//   // }
//   // if (ball.y > height || ball.y < 0){
//   //   ball.yspeed = ball.yspeed * -1;
//   // }

//   // ball.x = ball.x + ball.xspeed;
//   // ball.y = ball.y + ball.yspeed;
// }

// function move(){
//   ball.x = ball.x + ball.xspeed;
//   ball.y = ball.y + ball.yspeed;
// }

// function bounce() {
//   if (ball.x > width || ball.x < 0){
//     ball.xspeed = ball.xspeed * -1;
//   }
//   if (ball.y > height || ball.y < 0){
//     ball.yspeed = ball.yspeed * -1;
//   }
// }

// function display() {
//   stroke(255);
//   strokeWeight(4);
//   noFill();
//   ellipse(ball.x, ball.y, 24,24)
// }
