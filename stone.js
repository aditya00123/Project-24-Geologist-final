class Stone {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':4.0
      }

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;

      this.body = Bodies.rectangle(x, y, width, height, options);
      
      
      World.add(world, this.body);
    }
    display(){
    push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      fill('black');
      stroke(0)
      rect(0,0,this.width,this.height);
      
    pop();
    }
    }