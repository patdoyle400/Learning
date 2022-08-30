// For video 6.4

class Bubble {
    constructor(x,y,r) {
      this.x = x;
      this.y = y;
      this.r = r;
    }
    // Functions within a class don't need function call
    move() {
      this.x = this.x + random(-1,1);
      this.y = this.y + random(-1,1);
    }
  
    show() {
      stroke(255);
      strokeWeight(4);
      noFill();
      ellipse(this.x,this.y,this.r*2);
    }
  }