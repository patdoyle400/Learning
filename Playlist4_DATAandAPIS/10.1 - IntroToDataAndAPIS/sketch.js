
let data;

function preload(){ // Use preload function to verify data is loaded before draw starts executing
  data = loadJSON("birds.json");
}

function setup() {
  //createCanvas(400,400);
  // flower = loadJSON("flower.json"); This doesn't work! Need to make sure data is loaded before draw starts executing
  // {
  //   name: "sunflower",
  //   col: color(200,220,0)
  // }
  noCanvas();
  let birds;
  // bird = data.birds[1].members[2];
  birds = data.birds;

  for(let i = 0; i < birds.length; i++){
    createElement('h1',birds[i].family);
    let members = birds[i].members;
    for(let j = 0; j < members.length; j++){
      createDiv(members[j]);
    }
  }
  //createP(bird);
}

function draw() {
  background(0);
  // fill(flower.r,flower.g,flower.b);
  // text(flower.name,10,50);
}
