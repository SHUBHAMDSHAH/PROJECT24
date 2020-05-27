const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;


function setup() {
   var canvas = createCanvas(1200,400);
   engine = Engine.create();
   world = engine.world;

   ball = new Ball(200,300,50,50);
   ground = new Ground(600,height,1200,20);
   shootball = new ShootBall(200,300,50,50);
   tanker = new Tanker(250,300,200,200);
}

function draw() {
  ball.display();
  ground.display();
  shootball.display();
  tanker.display();
}


function keyReleased() {
  if(keyCode === 32){
      
  }
}