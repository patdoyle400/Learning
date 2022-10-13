// Video 7.1 introduces arrays

var nums = [100, 25, 12, 72];
var num = 23;
var index = 0;
var words = ["rainbow","heart","purple","friendship","love"]

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  for (var i = 0; i < 4; i++){
    stroke(255);
    fill(51);
    ellipse(i*100+100,200,nums[i],nums[i])
  }
  // ellipse(200,300,nums[0],nums[0]);
  // ellipse(100,300,nums[1],nums[1]);
  fill(255);
  textSize(32);
  //text(words[index],200,200);
}

function mousePressed() {
  index = index + 1;
  if (index == words.length){
    index = 0;
  }
}
