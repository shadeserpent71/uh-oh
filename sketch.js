
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    var ball_options={
		restitution:0.3,
		density:1.2,
		isStatic:false
	    
	}
	//Create the Bodies Here.
    ball=Bodies.circle(200,50,20,ball_options);
	World.add(world,ball);
    ground=new Ground(400,670,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
 ground.display();
}



