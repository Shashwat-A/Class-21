var fixedRect, movingRect;
var sq;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  sq = createSprite(500,600,50,50)

 // movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;
}

function draw() {
  background("white");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  //bounceOff(movingRect,fixedRect);

  if (isTouching(movingRect,sq)) {
    movingRect.shapeColor = "red";
    sq.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    sq.shapeColor = "green";
  }
  
  drawSprites();
}
