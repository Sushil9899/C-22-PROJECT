const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var options = {

  isStatic:true
}
var angle = 120

function preload() {
  backgroundImg = loadImage("bg.gif");
  baseimage = loadImage("base.png");
  playerimage = loadImage("player.png");
  bow = loadImage("playerArcher.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
  playerBase = Bodies.rectangle(400,320,180,180,options)
  World.add(world,playerBase)
  playerBase.scale = 3

  //create player body
  player = Bodies.rectangle(400,300,40,40,options)
  World.add(world,player)

  playerArcher = Bodies.rectangle(440,213,40,40,angle)
  World.add(world,playerArcher)


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(baseimage,400,320,180,180)

  //show the playerbase image using image() function
  image(playerimage,450,210,60,140)

  image(bow,490,213,80,80,angle)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
