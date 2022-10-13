// For video 6.4

class Bubble {
    constructor(x,y,r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.brightness = 0;
    }
    // Functions within a class don't need function call
    move() {
      this.x = this.x + random(-1,1);
      this.y = this.y + random(-1,1);
    }
  
    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness,100);
        ellipse(this.x,this.y,this.r*2);
    }

    clicked(px,py) { 
        let d = dist(px,py, this.x, this.y);
        if (d < this.r) {
          this.brightness = 255;
        }
      }
  }