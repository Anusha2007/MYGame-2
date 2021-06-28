const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;

var myengine,myworld;
var ground,player,backgroundImg1,backgroundImg2;
var supplyImg,oxyTanksImg;

function preload(){
backgroundImg1=loadImage("background 1.jpg");
backgroundImg2=loadImage("background 2.jpg");
astronautImg=loadImage("astronaut-2.png");
supplyImg=loadImage("package.png");
oxyTanksImg=loadImage("oxygen_tanks.png");
}

function setup(){
createCanvas(displayWidth,displayHeight);
myengine=Engine.create();
myworld=myengine.world;

player=createSprite(200,400,30,40);
player.addImage(astronautImg);
player.scale=0.6;
//player=new Astronaut(200,490,30,40);
//ground1= new Ground(600,530,1300,20);
ground=createSprite(600,530,1300,20);
ground.velocityX=-4;
if (ground.x < 0){
    ground.x = ground.width/2;
  }
//supply=new Supply(1000,Math.round(random(100,500)),40,40);

}

function draw(){
Engine.update(myengine);
background(backgroundImg1);

getSupplies();
getOxygen();
//player.display();
//ground1.display();
//supply.display();
drawSprites();
}

function getSupplies(){
    if(frameCount%150===0){
        var supply=createSprite(1000,Math.round(random(100,500)),40,40);
        supply.velocityX=-4;
        supply.addImage(supplyImg);
        supply.scale=0.3;
        }
}

function getOxygen(){
    if(frameCount%200===0){
        var oxyTanks=createSprite(1000,Math.round(random(70,400)),60,30);
        oxyTanks.velocityX=-2;
        oxyTanks.addImage(oxyTanksImg);
        oxyTanks.scale=0.3;
    }
}