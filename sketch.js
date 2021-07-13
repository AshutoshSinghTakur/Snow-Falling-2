var bg;

function preload(){
  back1 = loadImage("snow1.jpg");
  back2 = loadImage("snow2.jpg");
  back3 = loadImage("snow3.jpg");
  snowfall1 = loadImage("snow4.png");
  snowfall2 = loadImage("snow5.png");
  boyImg  = loadAnimation("boy1.png","boy2.png");
  boyImg1 = loadAnimation("boy3.png","boy4.png")
  boyImg2 = loadAnimation("boy5.png","boy6.png");
  boyImg3 = loadAnimation("boy7.png","boy8.png");

  //getBackgroundImg();
}

function setup() {
  createCanvas(1000,600);
  
}

function draw() {
  //if(backgroundImg){
  background(back2);  
  //}

  if(frameCount % 30 == 0){
    var snow1 = createSprite(Math.round(random(10,900),10,10));
    snow1.addImage(snowfall1);
    snow1.scale = 0.2
    snow1.velocityY = 2

    var snow2 = createSprite(Math.round(random(10, 900),10,10))
    snow2.addImage(snowfall2);
    snow2.scale = 0.1
    snow2.velocityY = 2
  }

  if(frameCount % 170 == 0){
    position = Math.round(random(1,2));
    var boy = createSprite(1000,450)
    if(position == 1){
     boy.x = 1000; 
     boy.velocityX = -5
     boy.addAnimation("moving",boyImg)
     }else{
      boy.x = 0;
      boy.velocityX = 5
      boy.addAnimation("moving1", boyImg1)
     }
    boy.scale = 0.7 

  }

  drawSprites();
}

