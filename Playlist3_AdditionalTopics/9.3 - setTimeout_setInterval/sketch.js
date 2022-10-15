
let x = 0;


//let counter = 0;
let timer1;
let timer2;
//let interval;
// let button;
// let button2;

function setup() {
  createCanvas(400, 400);
  // timer = createP('Timer')
  // //interval = setInterval(timeIt,500);
  // button = createButton('Start timer');
  // button.mousePressed(doTimer);
  // // button2 = createButton('Stop timer');
  // // button2.mousePressed(stopTimer);
  // // setTimeout(rainbow,1000);
  timer1 = createP('Timer 1');
  timer2 = createP('Timer 2');

  makeTimer(timer1,1000);
  makeTimer(timer2,500);
  //makeTimer();
  //setInterval(timeIt,500);
}

function draw() {


  background(51);
  stroke(255);
  line(x,0,x,height);

  x += 3;
  if (x > width){
    x = 0;
  }
}

// This is a closure!
function makeTimer(elt,wait){
  var counter = 0;
  setInterval(timeIt,wait);

  function timeIt(){
    elt.html(counter);
    //timer2.html(counter);
    counter++
  }
}

// function mousePressed(){
//   setTimeout(rainbow,3000);
// }
function doTimer(){
  // interval = setInterval(timeIt,500);
  // button.html('Stop timer');

  // if (!interval){
  //   interval = setInterval(timeIt,500);
  //   button.html('Stop timer');
  // } else {
  //   clearInterval(interval);
  //   interval = false;
  //   button.html('Start timer');
  // }
}

function stopTimer(){
  clearInterval(interval);
}



// function mousePressed(){
//   clearInterval(interval);
// }


