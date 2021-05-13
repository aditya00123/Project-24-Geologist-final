class Plane {
 constructor(x,y) {

    this.x = x;
    this.y = y;
    this.width = 1200;
    this.height = 10;

    var options = {
        isStatic:true,
        density:100,
    }

     this.body = Bodies.rectangle(x,y,1200,10,options);
     this.body.shapeColor = red;

     World.add(world, this.body);

 }

 display() {
     var pos = this.body.position;
     rectMode(CENTER);
     fill('white');
     stroke(0);
     rect(pos.x,pos.y,1200,10);

     
 }
}