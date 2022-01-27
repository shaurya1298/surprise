var family1Img

function preload(){
family1Img=loadImage("family1.jpg")

}

function setup() 
{
  createCanvas(5000,700);
  family1=createSprite(100,350,10,10)
  family1.addImage(family1Img)
  family1.scale=0.2
  
}

function draw() 
{
  background(51);

  if(keyDown("left")){
    family1.velocityX=-5
    family1.velocityY=0
    
    
    }
    if(keyDown("right")){
    family1.velocityX=5
    family1.velocityY=0

    }

    if(keyDown("Up_Arrow")){
      family1.velocityX=0
      family1.velocityY=-5
  
      }
      if(keyDown("DOWN_Arrow")){
        family1.velocityX=0
        family1.velocityY=5
    
        }
    
  

    createEdgeSprites();
   
    
 
  drawSprites()

 
   
}