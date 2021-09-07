var prebomb, predrink, precoin, prepower,prepath,prerunner
function preload(){
  //pre-load images
  prebomb = loadImage("bomb.png");
  precoin = loadImage("coin.png");
  predrink = loadImage("energyDrink.png");
  prepower = loadImage("power.png");
  prepath = loadImage("path.png");
  prerunner = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(800,800);
  path = createSprite(400,400,50,50);
  path.addImage(prepath)
  runner = createSprite(400,675,40,40);
 runner.addAnimation("running",prerunner)
 runner.scale = .1


  
}

function draw() {
  background(0);
  if(keyDown("right"))
  {
    runner.x= runner.x+10
  }
  if(keyDown("left"))
  {
    runner.x= runner.x-10
  }
  drawSprites();

}
