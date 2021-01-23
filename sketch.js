
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var score
var survivaltime = 0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
  
}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(85,495,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.17
  
  ground = createSprite(400,550,1000,10) 
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
  obstacleGroup = createGroup();  
  FoodGroup = createGroup();
}


function draw() {
  background("white")
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+ score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivaltime = Math.ceil(frameCount/frameRate())
  text("survivaltime:"+ survivaltime,100,50)
  
   if (ground.x < 100){
      ground.x = ground.width/2;
    }  
  
   if(keyWentDown("space")){
     monkey.velocityY = -20;
   }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground)
  
 swpanobstacles();
  swpanbananas();
  drawSprites();
}

function swpanobstacles(){
  if (frameCount % 200 === 0){
    obstacle = createSprite(600,500,10,10);
    obstacle.addImage("obstacles",obstaceImage)
    obstacle.velocityX = -6
    obstacle.scale=0.25
   
    
   
   
    //assign scale and lifetime to the obstacle           
   
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);}

}

function swpanbananas(){
  if (frameCount % 75 === 0){
    banana = createSprite(600,300,10,10)
    banana.addImage("banana",bananaImage)
    banana.velocityX = -10
    banana.scale=0.1
    
    banana.lifetime = 300
    FoodGroup.add(banana)    
  }
}

