//let dropzone;
let canvas;

function setup() {
  canvas = createCanvas(400, 400);
  background(2);

  //dropzone = select('#dropzone');
  //canvas.dragOver(highlight);
  //canvas.dragLeave(unhighlight);
  canvas.drop(gotFile);
}

// function draw() {
//   background(220);
// }

// function highlight(){
//   dropzone.style('background-color','#ccc');
// }

// function unhighlight(){
//   dropzone.style('background-color','#fff');
// }

function gotFile(file){
  createP(file.name + " " + file.size);
  var img = createImg(file.data);
  //img.size(1122/4,2208/4)
  image(img,0,0,400,400);
}