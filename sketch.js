var bullet, speed, weight; 
var wall;  



function setup() {
  createCanvas(1600,400);

  speed = random(55,90); 
  weight = random(400,1500); 
  thickness = random(20,85);
   
  bullet = createSprite(50, 200, 50, 0); 
  bullet.velocityX = speed; 
  bullet.shapeColor = "white"; 
  
  wall = createSprite(1200, 200, thickness, height/2); 
  wall.shapeColor = "blue"; 
  
}

function draw() {
  background(0);  
  
/*if(wall.x - bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX = 0; 
  var deformation =0.5 * weight * speed * speed/22500; 
  if (deformation>180)
  {
    bullet.shapeColor = "red"; 
  }
  if (deformation<180 && deformation>100)
  {
    bullet.shapeColor = "yellow"; 
  }
  if (deformation<100)
  {
    bullet.shapeColor = "green"; 
  }
} 
*/
if (hasCollided(bullet, wall))
{ 
  bullet.velocityX = 0; 
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness); 

  if (damage>10)
  { 
    wall.shapeColor = "red"
  }

  if (damage<10)
  {
    wall.shapeColor = "green"
  }
}
  drawSprites();
}

function hasCollided(lbullet, lwall)
{ 
  bulletRightEdge = lbullet.x + lbullet.width; 
  wallLeftEdge = lwall.x
  if (bulletRightEdge>=wallLeftEdge)
  { 
    return true; 
  }
  return false; 
}