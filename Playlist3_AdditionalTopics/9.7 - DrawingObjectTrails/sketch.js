let particles = [];

function setup() {
  createCanvas(800, 800);
  //particle = new Particle(100,100);
  //background(220);
}

function draw() {
  background(220);
  // particle.update();
  // particle.show();
  for(let i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].show();
  }

  line(frameCount,0,frameCount,height);
}

function mousePressed(){
  particles.push(new Particle(mouseX,mouseY));
}