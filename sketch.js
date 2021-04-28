var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
 
//var particles;
var plinkos = [];

var divisions = [];
var balls = [];
var ball;

var count=0;
var gameState = "start";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //line=createSprite(0,530,100,10);
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 

function draw() {
 background("black");
 textSize(25)
 fill("white");
 text("Score : "+score,20,30);
 textSize(35);
 text("500", 10, 550);
 text("500", 85, 550);
 text("500", 165, 550);
 text("500", 245, 550);
 text("100", 325, 550);
 text("100", 405, 550);
 text("100", 485, 550);
 text("200", 565, 550);
 text("200", 645, 550);
 text("200", 725, 550);
 
  Engine.update(engine);
  ground.display();
 //line.display();

 if(gameState=="end"){
  textSize(100);
  text("GameOver", 150, 250); 
}

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
      }

 if(ball!=null)
    {
    ball.display();
          
  if (ball.body.position.y>760)
   {
  if (ball.body.position.x < 300) 
   {
   score=score+500;      
   ball=null;
  if ( count>= 5) gameState ="end";                          
  }
  
  
  else if (ball.body.position.x < 600 && ball.body.position.x > 301 ) 
    {
    score = score + 100;
    ball=null;
    if ( count>= 5) gameState ="end";
  
    }
       else if (ball.body.position.x < 900 && ball.body.position.x > 601 )
      {
    score = score + 200;
    ball=null;
    if ( count>= 5)  gameState ="end";
  
    }      
  }
    
}
  


  // if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  //for (var j = 0; j < particles.length; j++) {
   
    // particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
}

function mousePressed(){
  if(gameState!=="end"){
   count++
   ball=new Ball(mouseX, 10, 10, 10);
  }
}


