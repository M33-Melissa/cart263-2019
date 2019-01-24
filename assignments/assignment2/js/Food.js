// Food
//
// A class to represent food, mostly just involves the ability to be
// a random size and to reset

class Food extends Agent {

  // Constructor
  //
  // Pass arguments on to the super() constructor (e.g. for Agent)
  // Also set a minimum and maximum size for this food object which it
  // will vary between when it resets
  constructor(x,y,maxSpeed,minSize,maxSize) {
    super(x,y,random(minSize,maxSize),'#55cccc');
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.vx = 1;
    this.vy = 1;
    this.maxSpeed = maxSpeed;
  }

  // update()
  //
  //
  update() {
    this.x = constrain(this.x + this.vx,0,width);
    this.y = constrain(this.y + this.vy,0,height);
    if (this.x === 0 || this.x === width) {
      this.vx = -this.vx;
    } else if (this.y === 0 || this.y === height) {
      this.vy = -this.vy;
    }

    // reset random velocity at timeframe
    if (frameCount%60 === 0) {
      this.vx = random(-this.maxSpeed,this.maxSpeed);
      this.vy = random(-this.maxSpeed,this.maxSpeed);
    }
  }

  // reset()
  //
  // Set position to a random location on the canvas
  // Set the size to a random size within the limits
  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.vx = random(-this.maxSpeed,this.maxSpeed);
    this.vy = random(-this.maxSpeed,this.maxSpeed);
    this.size = random(this.minSize,this.maxSize);
  }
}
