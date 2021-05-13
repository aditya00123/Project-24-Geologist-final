class Sand {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.radius = 10;


        var options = {
            'density': 0.01,
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
        fill('red');
        ellipseMode(CENTER);
        circle(0,0,10);
pop();
    }
}