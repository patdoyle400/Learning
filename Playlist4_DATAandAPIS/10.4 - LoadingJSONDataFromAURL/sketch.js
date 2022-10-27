function setup() {
  createCanvas(400,400);
  background(0);
  loadJSON("http://api.open-notify.org/astros.json",gotData);
}

let spaceData;
function gotData(data){
  console.log(data);

  // fill(255);
  // for(let i = 0; i < data.number; i++){
  //   ellipse(random(width),random(height),15,15);
  // }
  spaceData = data;
}
let x = 0;
function draw() {
  fill(255);
  line(x,0,x,height);
  x += 1;
  randomSeed(2);
  if (spaceData){
    for(let i = 0; i < spaceData.number; i++){
      ellipse(random(width),random(height),15,15); // This causes problems because data isn't loaded yet
    }
  }
  
}
