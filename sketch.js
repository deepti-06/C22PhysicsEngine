//namespacing

const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies


var engine, world, object
function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world= engine.world;
  var option= {
    isStatic:true
  }


ground= Bodies.rectangle(200,360,400,10,option)
World.add(world,ground)



//console.log(object)

 
}

function draw() {
  background("black");  
  Engine.update(engine)
   rectMode(CENTER)
  // fill("brown")
  rect(ground.position.x,ground.position.y,400,10)
 
}