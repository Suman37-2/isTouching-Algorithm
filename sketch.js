var rectmove,rectfixed;

function setup() {
  createCanvas(400,400);
  rectmove=createSprite(200,200,30,20);
  rectfixed=createSprite(100,200,30,20);
}

function draw() {
  background("blue");  
rectmove.x=World.mouseX;
rectmove.y=World.mouseY;

if((rectmove.x-rectfixed.x<=(rectmove.width+rectfixed.width)/2)
&& (rectfixed.x-rectmove.x<=(rectmove.width+rectfixed.width)/2)
&& (rectmove.y-rectfixed.y<=(rectmove.height+rectfixed.height)/2)
&& (rectfixed.y-rectmove.y<=(rectmove.height+rectfixed.height)/2)){

rectmove.shapeColor="black";
rectfixed.shapeColor="red";

}
else {
  rectmove.shapeColor="red";
rectfixed.shapeColor="black";
}


  drawSprites();
}