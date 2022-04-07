  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  const Constraint = Matter.Constraint;

  var engine,world;
  var backgroundImg;
  var snow1,snow2,snow3;

  function setup() {
    createCanvas(800,400);
    //createSprite(400, 200, 50, 50);
    engine = Engine.create();
    world = engine.world;

  

    snow1 = new Snow(400,200);
    snow2 = new Snow(100,400);
    snow3 = new Snow(500,300);

    ground1 = new Ground(400,390,800,5);

  }

  function preload(){
    backgroundImg = loadImage("snow1.jpg");
  }

  function draw() {
    background(backgroundImg);  
    drawSprites();

    Engine.update(engine);

    snow1.display();
    snow2.display();
    snow3.display();
    

    
  }