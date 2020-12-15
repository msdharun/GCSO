function isTouching(p1,p2)
{ if(p1.x-p2.x<p2.width/2+p1.width/2 && p2.x-p1.x<p2.width/2+p1.width/2 && p1.y-p2.y<p2.width/2+p1.width/2 && p2.y-p1.y<p2.width/2+p1.width/2)
  { return true;
  } else
   { return false;} }
function bounceOff(movingRect,fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
}