;const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,Rubber;
var box;
var ground,stone;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   // plane = new Plane(600,height,1200,20)
    hammer = new Iron(300,300,100,30);
    box=new Box(200,200);
    ground= new Plane(600,600,1200,20);
    stone= new Stone(700,320,100,100);
    Rubber= new rubber(900,450)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    //Rubber.display();
  //  plane.display();
    hammer.display();
   box.display();
   ground.display();
   stone.display();
   Rubber.display();
}