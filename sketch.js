var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, manImage1, manImage2, manImage3, box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var man, k, a, box3, dustbin1, background1, backgroundImg;
var hpSpeed = 0;
var b = 0;
a = false;
k = -3;
background1 = "black";

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	manImage1 = loadImage("image2.png");
	manImage2 = loadImage("image1.png");
	manImage3 = loadImage("image3.png");
	backgroundImg = loadImage("background.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	man = createSprite(820, 627, 30, 30);
	man.addImage(manImage1);
	man.scale = 0.2;

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("brown");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	dustbin1 = new dustbin(350, 650);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(background1);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  dustbin1.display();
  helicopterSprite.velocityX = hpSpeed;
  if (man.x <= packageSprite.x)
  {
	  packageSprite.visible = false;
	  a = true;
	 k = 0; 
	  man.velocityX = 0;
	  man.addImage(manImage2);
  }
  
  drawSprites();
  if (b === 1 && !man.isTouching(packageSprite))
  {
	  fill("white");
	  text("JOJO MOJO HAS CREATED THE VACCINE FOR THIS APOCALYPSE TOO !!", 175, 100);
  }
  if (man.isTouching(packageSprite))
  {
	  k = 0;
	  hpSpeed = 3;
	  groundSprite.visible = false;
	  stroke(0);
	  fill("white");
	  text("THANK YOU !!", 305, 580);
	  background1 = backgroundImg;
  }
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	man.velocityX = k;
	b = 1;
  }
}



