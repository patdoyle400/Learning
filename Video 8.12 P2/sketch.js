
let array = ['number1','number2','number3','number4'];
let button;

function setup() {
  
  button = select('#button');
  button.mousePressed(addItem);

}

function addItem(){
  var r = floor(random(0,array.length));
  var listElement = createElement('li',array[r]);
  listElement.parent("List")
}
