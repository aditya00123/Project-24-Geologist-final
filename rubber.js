class Rubber {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.radius = 50;


        var options = {
            'density': 1,
            'friction': 5,
            'restitution': 0.3
        }

        this.body = Matter.Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
    }

    display() {
var pos = this.body.position;

push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill('purple');
        stroke('darkblue');
        ellipseMode(CENTER);
        ellipse(0,0,100,100);
pop();
    }
}