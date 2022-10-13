// Video 5.3 discusses using functions that return values

function setup() {
  var km = milesToKm(26.2);
  println(km);

}

function milesToKm(miles){
  var km = miles * 1.6;
  return km;
}

function draw() {
  background(220);
}
