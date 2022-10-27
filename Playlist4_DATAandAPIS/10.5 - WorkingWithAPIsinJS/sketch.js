
//let url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=001b0f58045147663b1ea518d34d88b4'
let api = 'https://api.openweathermap.org/data/2.5/weather?q=';
//let city = 'London';
let apiKey = '&appid=001b0f58045147663b1ea518d34d88b4';
let units = '&units=metric';



let input;

function setup() {
  createCanvas(400, 400);


  let button = select("#submit");
  button.mousePressed(submitCity);

  input = select('#city');
  
}

function submitCity(){

  let url = api+input.value()+apiKey+units
  loadJSON(url,gotData);
}


let weather;
function gotData(data){
  weather = data;
}


function draw() {
  background(0);
  if(weather){
    let temp = weather.main.temp;
    let humidity = weather.main.humidity;
    ellipse(200,200,temp,temp);
    ellipse(50,200,humidity,humidity);
  }
}
