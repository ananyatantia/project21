var bullet, wall ,thickness
var speed, weight

function setup() {
  createCanvas(1600,600);
 bullet = createSprite(50, 200, 30, 10);
 wall = createSprite(1000, 300, thickness, 300);
 speed = random (30,52)
 weight = random (400,1500)
 thickness = random ( 22 , 83.)
 bullet.velocityX = speed
}

function draw() {
   background(0)
   if(wall.x-bullet.x <(bullet.width+wall.width)/2){
  bullet.velocityX = 0
   var deformation = 0.5* speed*speed*weight/(thickness*thickness*thickness)
   }
   if(deformation>5){
     wall.shapeColor = ("red")
   }
   
  if(deformation<5){
    wall.shapeColor = ("green")
  }


  drawSprites();
}