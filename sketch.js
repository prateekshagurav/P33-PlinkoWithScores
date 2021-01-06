const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas;
var ground
var divisions = [], plinkos = []
var particle;
var score = 0;
var chance = 5;
gameState = 1; // 1 - play, 0 - end

function setup() {
   canvas = createCanvas(500, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width, height, 10); //width and height of canvas

  for (var i = 0, x = 0; x <= width; i++, x += 50) {
    divisions[i] = new Division(x, height - 100, 10, 200);
  }

  for (var y = 100, x = 20; y < 350; y += 40) {
    if (x == width) x = 30;
    else x = 20;
    for (; x < width; x += 30) {
      plinkos.push(new Plinko(x, y, 5));
    }
  }

  Engine.run(engine);
}

function draw() {
  background("black");

  ground.display();
  for (var i = 0; i <= 10; i++) {
    divisions[i].display();
  }
  for (i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  if(particle!= undefined){
    particle.display();
  }
  textSize(20);
  fill("orange");
  text("SCORE : " + score, 20, 50);
  text("CHANCES LEFT : " + chance, width - 200, 50);
  
  textAlign(CENTER);
  textSize(15);
  fill("grey");
  for (var x = 250, i = 0; i < 5; i++) {
    youWin = 20 + 20 * i;
    text(youWin, x + 25 + i * 50, 420)
    text(youWin, x - 25 - i * 50, 420)
  }

  if (chance == 0) {
    gameState = 0;
  } 
  if (gameState == 0) {
    fill("black");
    stroke("orange");
    strokeWeight(3);
    rectMode(CENTER)
    rect(width / 2, height / 2, 300, 100);
    stroke("grey");
    rect(width / 2, height / 2, 295, 95);
    textSize(40)
    fill("grey");
    noStroke();
    textAlign(CENTER,CENTER);
    text("GAME OVER ", width / 2, height / 2);;

  }

  
  canvas.mousePressed(()=>{
    
    if (gameState == 1) {
      particle = null;
      particle = new Particle(mouseX, 20, 7);
      //chance--;
    }

  });
}

