var bg;

function preload(){
  back1 = loadImage("snow1.jpg");
  back2 = loadImage("snow2.jpg");
  back3 = loadImage("snow3.jpg");
  snowfall1 = loadImage("snow4.png");
  snowfall2 = loadImage("snow5.png");

  //getBackgroundImg();
}

function setup() {
  createCanvas(1000,600);

  
}

function draw() {
  //if(backgroundImg){
  background(back3);  
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

  drawSprites();
}

