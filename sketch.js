
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone1;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane1 = new Plane(600,690);
    hammer1 = new Hammer(200,200);
    stone1 = new Stone(400,600,100,100);
    rubber1 = new Rubber(400,600);
    iron1 = new Iron(400,600,100,100);
    sand1 = new Sand(700,500);
    sand2 = new Sand(715,500);
    sand3 = new Sand(730,500);
    sand4 = new Sand(745,500);
    sand5 = new Sand(760,500);
    sand6 = new Sand(775,500);

    // Debug are not for bodies
    //stone1.debug = true;
  //plane1.debug = true;
}


function draw() {
  
  background("lightblue");
  Engine.update(engine);
  
  plane1.display();
  hammer1.display();

  stone1.display();
  rubber1.display();
  iron1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
 
  stroke('black');
  fill('black');
  textSize(20)
  text('hammer',mouseX,mouseY-20);

  text('stone',stone1.body.position.x,stone1.body.position.y-70 );
  text('iron',iron1.body.position.x,iron1.body.position.y-70);
  text('rubber',rubber1.body.position.x,rubber1.body.position.y-70);
  text('sand',sand3.body.position.x,sand3.body.position.y-15);

  drawSprites();
 
}



