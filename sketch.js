var road;
var track;
var path;
var boy;


function preload(){

    //pre-load images
    path = loadImage("path.png");
    boy = loadAnimation("Runner-1.png");
}



function setup(){
    createCanvas(400,400);

    //create sprites here
    track = createSprite(200,200,0,0);
    track.scale = 1.2;
    track.addImage("road",path);
    
    //create runner1 sprite
    runner1 = createSprite(200,200,0,0);
    runner1.scale = 0.10;
    runner1.addAnimation("athlete",boy);

    //create boundary sprites
    invisibleGround1 = createSprite(1,200,40,400);

    //make boundary invisible
    invisibleGround1.visible = false;
    

    //create second boundary sprite
    invisibleGround2 = createSprite(400,200,50,400);
    
    //make boundary invisible
    invisibleGround2.visible = false;
    
}





function draw(){
  background(0);

    //add velocity
    track.velocityY = 4;

    //add if condition
    if(track.y > 400){
      track.y = track.height/10;
    }

    //make runner move to the right and left side of himself
    runner1.x = World.mouseX;

    //make the runner1 touch the boundaries
    runner1.bounceOff(invisibleGround1);
    runner1.bounceOff(invisibleGround2);

    //draw sprites
    drawSprites();
}
