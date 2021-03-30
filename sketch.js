var garden,rabbit;
var gardenImg,rabbitImg;
var orangeleaf,leaf;
var redImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orangeleaf= loadImage("orangeLeaf.png")
  Leaf=loadImage("leaf.png")
  redImage=loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  orange1()
  red1()
  leaf1()
  rabbit.x=mouseX
  

  drawSprites();
}

function orange1(){
  if(frameCount%60===0){
var orange=createSprite(random(20,371),15,10,10)
    orange.addImage(orangeleaf)
    orange.velocityY=5
    orange.scale=0.1
    
  }
}


function red1(){
  if(frameCount%100===0){
    var red=createSprite(random(72,250),25,10,10)
    red.addImage(redImage)
    red.velocityY=4
    red.scale=0.05
    
  }
}
function leaf1(){
  if(frameCount%120===0){
    var leaf=createSprite(random(0,400),15,10,10)
    leaf.addImage(Leaf)
    leaf.velocityY=2
    leaf.scale=0.04
    
  }
}
