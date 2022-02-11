var box
function setup() {
  createCanvas(400,400);
  box= createSprite(100,200,40,60)
  box.shapeColor= "red"
}

function draw() 
{
  background(0);
  drawSprites ()
  if (keyDown("up")) { 
    box.y= box.y-5
  }
  if (keyDown("down")) { 
    box.y= box.y+5
  }
  if (keyDown("left")) { 
    box.x= box.x-5
  }
  if (keyDown("right")) { 
    box.x= box.x+5
  }

}




