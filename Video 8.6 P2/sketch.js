// 8.7 The basics of CSS
// 8.8 Events "changed" and "input"

var textBox;
var slider;
var paragraph;


function setup() {
  // //createCanvas(400, 400);
  // bgcolor = color(51);
  // txt = createP('some text');

  // txt.style("background-color","pink");
  // txt.mouseOver(changeStyle);
  // txt.mouseOut(revertStyle);

  // button = createButton("go");
  // //button.style("background-color","red")
  // button.mousePressed(changeStyle);

  noCanvas();
  
  textBox = createInput("Enter text");
  slider = createSlider(25,50,25);

  textBox.input(updateText);
  slider.input(updateSize);
  paragraph = createP("Starting text");

}

function updateText(){
  paragraph.html(textBox.value());
}

function updateSize(){
  paragraph.style("font-size",slider.value()+"pt");
}

function changeStyle(){
  txt.style("background-color","red");
  txt.style("padding","24px");

}

function revertStyle(){
  txt.style("background-color","purple");
  txt.style("padding","8px");
}



// function draw() {
//   background(bgcolor);
//   fill(255,0,175);
//   ellipse(200,200,50,50);
// }
