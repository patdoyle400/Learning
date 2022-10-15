
let vertices = [];
let button;


function setup() {
  createCanvas(800, 800);
  resetSketch();
  button = createButton("Reset");
  button.style('padding','20px')
  button.mousePressed(resetSketch);
}

function resetSketch(){
  vertices = [];
}

function mousePressed(){
  let v = createVector(mouseX,mouseY);
  if(mouseX > 0 && mouseX<width && mouseY<height && mouseY>0){
    vertices.push(v);
  }
  
}

function draw() {
  background(51);

  let reached = [];
  let unreached = [];

  // Makes every vertex initially unreached
  for(let i=0; i<vertices.length;i++){
    unreached.push(vertices[i]);
  }

  reached.push(unreached[0]); // Defines first vertex
  unreached.splice(0,1); // Removes 1 element from unreached @ position 0

  // Keep looping until all elements of unreached are removed
  while (unreached.length > 0){
    let record = Infinity;
    let rIndex;
    let uIndex;
    
    for(let i=0; i<reached.length; i++){
      for(let j=0; j<unreached.length; j++){
        let v1 = reached[i];
        let v2 = unreached[j];
        let d = dist(v1.x,v1.y,v2.x,v2.y);

        if (d<record){
          record = d;
          rIndex = i;
          uIndex = j; // Storing position in unreached element
        }
      }
    }
    push();
    strokeWeight(2);
    line(reached[rIndex].x,reached[rIndex].y,unreached[uIndex].x,unreached[uIndex].y);
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex,1);
    pop();

  }

  for(let i=0;i<vertices.length;i++){
    fill(255);
    //strokeWeight(255);
    stroke(255);
    ellipse(vertices[i].x,vertices[i].y,16,16);
  }
}
