
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var engine
var world

var angle=60;

var fan1,fan2,fan3,fan4,fan5

var Ball1,Ball2,Ball3,Ball4,Ball5


function setup() {
  createCanvas(500,500);

  engine = Engine.create();
  world = engine.world;
  
   
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground = Bodies.rectangle(165,480,100,20,ground_options);
  World.add(world,ground);

  
  
 fan1=new Rotater(50,250,30,80,"red")
 fan2=new Rotater(150,250,30,80,"yellow")
 fan3=new Rotater(250,250,30,80,"cyan")
 fan4=new Rotater(350,250,30,80,"green")
 fan5=new Rotater(450,250,30,80,"blue")

 Ball1=new ball(50,50,10,)
 Ball2=new ball(150,50,10)
 Ball3=new ball(250,50,10)
 Ball4=new ball(350,50,10)
 Ball5=new ball(450,50,10)
 
 
  rectMode(CENTER);
 

}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  rect(ground.position.x,ground.position.y,650,20);
  
//  fan1.show()
// //  fan2.show()
//  fan3.show()
// //  fan4.show()
//  fan5.show()

 Ball1.display()
 Ball2.display()
 Ball3.display()
 Ball4.display()
 Ball5.display()
 
  
  
 
//console.log(ground.position.y);



  
  
}

function vForce()
{
  Matter.Body.applyForce(Ball5,{x:0,y:0},{x:0,y:-0.05});
  
}
  