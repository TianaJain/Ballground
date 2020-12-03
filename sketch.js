const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas;
var engine, world;
var ground,ball;


function setup() {
  canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options ={
    isStatic : true
  }
  
  ground = Bodies.rectangle(200,390,400,10,options);
  World.add(world,ground);

  var bounce={
    restitution:1.0
  }
  ball=Bodies.circle(100,150,15,bounce);
  World.add(world,ball);
  console.log(ground);
  console.log(ground.position.x);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);
}