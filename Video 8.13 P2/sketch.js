//let p;
let images = [];
let btn;

function setup() {
  // for(let i = 0; i < 10; i++){
  //   let p = createP('apples');
  //   let x = floor(random(windowWidth));
  //   let y = floor(random(windowHeight));
  //   p.position(x,y);
  //   p.class('apple');
  // }

  // for(let i = 0; i < 10; i++){
  //   let p = createP('blueberries');
  //   let x = floor(random(windowWidth));
  //   let y = floor(random(windowHeight));
  //   p.position(x,y);
  //   p.class('blueberry');
  //   p.mousePressed(becomeApple);
  // }

  noCanvas();
  for(let i = 0; i<5; i++){
    let p = createP('This is a link: ');
    p.style('background-color','#CCC');
    p.style('padding','24px');

    var a = createA('#','Layla');
    a.mousePressed(addPhoto);

    a.parent(p);
    btn = select('#clear');
    btn.mousePressed(clearStuff);
  }
  

}

// function becomeApple(){
//   this.class('apple');
// }

function addPhoto(){
  var img = createImg('Layla.jpg');
  img.size(1122/4,2208/4);
  var paragraph = this.parent();
  img.parent(paragraph);
  images.push(img);
}

function clearStuff(){
  for(let i = 0; i<images.length;i++){
    images[i].remove();
  }
  images = [];
}

// function draw() {
//   background(220);
// }
