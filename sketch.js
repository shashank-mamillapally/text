var path,path_running,pathImage
var Runner,Runner_running


function preload(){
  //pre-load images
  path_running=loadImage("path.png")
  Runner_running=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites her

  //create a path sprite
  path= createSprite(200,200);
  path.addImage(path_running);
  path.velocityY=4;
  path.scale=1.2;

  //create a  Runner sprite
  Runner = createSprite(200,350,10,10);
  Runner.addAnimation("running",Runner_running);
  Runner.scale = 0.1;
}


function draw() {
  background(0);
//code to reset the background
if(path.y > 400 ){
  path.y = height/2;
}
 
  drawSprites();


}
