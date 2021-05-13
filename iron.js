class Iron {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':6.0
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
      fill('grey');
      stroke(0)
      rect(0,0,this.width,this.height);
      
    pop();
    }
    }