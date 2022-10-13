
let slider = [];
let x;
let angle = 0;

function setup() {
  noCanvas();
  for(let i = 0; i < 500; i++){
    slider[i] = createSlider(0,255,50);
  }
  slider[0].input(adjustSliders);
}



function adjustSliders() {
  // let offset = 0;
  // for(let i = 1; i < slider.length; i++){
  //   x = map(sin(angle+offset),-1,1,0,255);
  //   slider[i].value(x); // Can pass values directly to slider value
  //   offset += .025;
  // }
  // angle += 0.1;

  for(let i = 1; i < slider.length; i++){
    slider[i].value(slider[0].value());
  }
  //background(slider.value());
}
