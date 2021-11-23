var astronaut, astronautImg;
var bg, bgImg;
var obstacle, obstacleImg;
var spaceship, spaceshipImg;
var star, starImg;
var obstaclesGroup;



//var vx = 0;
//var g = 0.05;
//var vy = 0;

function preload()
{
  astronautImg = loadImage("./Assets/Astronaut.png");
  bgImg = loadImage("./Assets/bg.png");
  obstacleImg = loadImage("./Assets/obstacle.png");
  spaceshipImg = loadImage("./Assets/spaceship.png");
  starImg = loadImage("./Assets/star.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //frameRate(80);

  astronaut = createSprite(200,540,30,30);
  astronaut.addImage(astronautImg);
  astronaut.scale = 0.15;

  obstacle = createSprite(100,100,30,30);
  obstacle.addImage(obstacleImg);
  obstacle.scale = 0.05;

  spaceship = createSprite(850,70,30,30);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.15;

  var star1 = createSprite(300,500,30,30);
  star1.addImage(starImg);
  star1.scale = 0.09;

  var star2 = createSprite(200,120,30,30);
  star2.addImage(starImg);
  star2.scale = 0.09;

  var star3 = createSprite(390,285,30,30);
  star3.addImage(starImg);
  star3.scale = 0.09;

  var star4 = createSprite(460,450,30,30);
  star4.addImage(starImg);
  star4.scale = 0.09;

  var star5 = createSprite(530,140,30,30);
  star5.addImage(starImg);
  star5.scale = 0.09;

  var star6 = createSprite(750,100,30,30);
  star6.addImage(starImg);
  star6.scale = 0.09;

  var star7 = createSprite(650,470,30,30);
  star7.addImage(starImg);
  star7.scale = 0.09;

  var star8 = createSprite(580,260,30,30);
  star8.addImage(starImg);
  star8.scale = 0.09;

  var star9 = createSprite(280,80,30,30);
  star9.addImage(starImg);
  star9.scale = 0.09;

  var star10 = createSprite(200,350,30,30);
  star10.addImage(starImg);
  star10.scale = 0.09;

  obstaclesGroup = createGroup();
 


  var cardboard1 = createSprite(450,50,600,5);
  cardboard1.shapeColor = "gray";

  var cardboard2 = createSprite(150,300,5,500);
  cardboard2.shapeColor = "gray";

  var cardboard3 = createSprite(250,400,5,150);
  cardboard3.shapeColor = "gray";

  var cardboard4 = createSprite(300,250,100,5);
  cardboard4.shapeColor = "gray";

  var cardboard5 = createSprite(300,325,100,5);
  cardboard5.shapeColor = "gray";

  var cardboard6 = createSprite(515,550,570,5);
  cardboard6.shapeColor = "gray";

  var cardboard7 = createSprite(800,350,5,400);
  cardboard7.shapeColor = "gray";

  var cardboard8 = createSprite(420,400,5,150);
  cardboard8.shapeColor = "gray";

  var cardboard9 = createSprite(550,450,100,5);
  cardboard9.shapeColor = "gray";

  var cardboard10 = createSprite(550,300,5,150);
  cardboard10.shapeColor = "gray";

  var cardboard11 = createSprite(700,150,200,5);
  cardboard11.shapeColor = "gray";
  
var cardboard12 = createSprite(250,150,5,200);
cardboard12.shapeColor = "gray";

var cardboard13 = createSprite(350,500,5,100);
cardboard13.shapeColor = "gray";

var cardboard14 = createSprite(515,350,70,5);
cardboard14.shapeColor = "gray";

var cardboard15 = createSprite(700,300,5,150);
cardboard15.shapeColor = "gray";

var cardboard16 = createSprite(450,120,5,150);
cardboard16.shapeColor = "gray";

var cardboard17 = createSprite(750,430,100,5);
cardboard17.shapeColor = "gray";

var cardboard18 = createSprite(620,380,5,180);
cardboard18.shapeColor = "gray";

var cardboard19 = createSprite(500,100,90,5);
cardboard19.shapeColor = "gray";

var cardboard20 = createSprite(390,170,120,5);
cardboard20.shapeColor = "gray";

var cardboard21 = createSprite(450,190,5,130);
cardboard21.shapeColor = "gray";

var cardboard22 = createSprite(550,475,5,50);
cardboard22.shapeColor = "gray";

var cardboard23 = createSprite(735,500,130,5);
cardboard23.shapeColor = "gray";

  rectMode(CENTER);
  textSize(15);

  
}

function draw() 
{
  background(51);
  image(bgImg,0,0);
  //push()
  //fill(255);
  //text("Vertical Velocity: "+round(vy),800,75);
  //pop();
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

  //fall down
  //vy +=g;
  //lander.position.y+=vy;

  /*if (keyIsDown(UP_ARROW)) {
    //this.astronautMoving = true;
    astronaut.velocityY = -2;
    astronaut.velocityX = 0;
    //player.update();
  }

  if (keyIsDown(DOWN_ARROW)) {
    //this.astronautMoving = true;
    astronaut.positionY = +2;
    astronaut.velocityX = 0;
    //player.update();
  }

  if (keyIsDown(LEFT_ARROW)) {
    //this.leftKeyActive = true;
    astronaut.positionX = -2;
    astronaut.velocityY = 0;
    //player.update();
  }

  if (keyIsDown(RIGHT_ARROW)) {
    //this.leftKeyActive = false;
    astronaut.positionX = +2;
    astronaut.velocityY = 0;
    //player.update();
  }*/

  if(keyDown("UP_ARROW")) {
    astronaut.velocityX = 0;
    astronaut.velocityY = -2;
   }
   
   if(keyDown("DOWN_ARROW")){
     astronaut.velocityX = 0;
     astronaut.velocityY = 2;
   }
   
   if(keyDown("LEFT_ARROW")){
     astronaut.velocityX = -2;
     astronaut.velocityY = 0;
   }
   
   if(keyDown("RIGHT_ARROW")){
     astronaut.velocityX = 2;
     astronaut.velocityY = 0;
   }

  //spawnObstacles();
  drawSprites();
}

/*function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityY = -6;
    
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacleImg);
               break;
       case 2: obstacle.addImage(obstacleImg);
               break;
       case 3: obstacle.addImage(obstacleImg);
               break;
       case 4: obstacle.addImage(obstacleImg);
               break;
       case 5: obstacle.addImage(obstacleImg);
               break;
       case 6: obstacle.addImage(obstacleImg);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.05;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}

 
 function spawnClouds() {
   //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
     var cloud = createSprite(600,120,40,10);
     cloud.y = Math.round(random(80,120));
     cloud.addImage(cloudImage);
     cloud.scale = 0.5;
     cloud.velocityX = -3;
     
      //assign lifetime to the variable
     cloud.lifetime = 200;
     
     //adjust the depth
     cloud.depth = trex.depth;
     trex.depth = trex.depth + 1;
     
     //add each cloud to the group
     cloudsGroup.add(cloud);
   }
 }*/
 
 
