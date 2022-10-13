// 8.9 CSS selectors

var paragraphs;
var paragraph;
var button;

function setup() {
  createCanvas(400, 400);
  background(0);

  //paragraph = select('#unicorn');
  // paragraph.mouseOver(highlight);
  // paragraph.mouseOut(unhighlight);

  
  paragraphs = selectAll('p');
  //paragraphs = selectAll('.rainbow');
  for(let i = 0; i <paragraphs.length;i++){
    paragraphs[i].mouseOver(highlight);
    paragraphs[i].mouseOut(unhighlight);
  }
  

 
 
}

function highlight(){
  this.style('padding','16pt');
  this.style('background-color','#F0F');
}

function unhighlight(){
  this.style('padding','0pt');
  this.style('background-color','#FFF');
}

function canvasBg(){
  background(random(255));
}
// function draw() {
//   background(220);
// }
