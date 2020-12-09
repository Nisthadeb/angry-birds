const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var pig1;
var log1;
var box3,box4;
var pig2;
var log2;
var box5;
var log3;
var log4;
var bird;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,380,50,50);
    box2 = new Box(300,380,50,50);
    pig1 = new Pig(200,380,50,50);
    log1 = new Log(200,320,300,PI);

    box3 = new Box(100,270,50,50);
    box4= new Box(300,270,50,50);
    pig2 = new Pig(200,270,50,50);
    log2 = new Log(200,200,300,PI);

    box5 = new Box(200,150,50,50);
    log3 = new Log(160,130,100,PI/4);
    log4 = new Log(250,130,100,PI/4);

    bird = new Bird(100,100);

    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log1.display();
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    bird.display();
}