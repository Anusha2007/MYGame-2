const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;

var myengine,myworld;
var backgroundImg1,backgroundImg2;

function preload(){
backgroundImg1=loadImage("background 1.jpg");
backgroundImg2=loadImage("background 2.jpg");
//astronautImg=loadImage("")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
myengine=Engine.create();
myworld=myengine.world;

player=new Astronaut(200,490,30,40);
ground1= new Ground(600,530,1000,20);
supply=new Supply(1000,Math.round(random(100,500)),40,40);
//supply.velocityY=-4;
}

function draw(){
Engine.update(myengine);
background(backgroundImg1);

player.display();
ground1.display();
supply.display();
}