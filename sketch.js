const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine,myWorld;
var ground;
var plinko = [];
//var balls = [];
var division = [];
var divht = 300;
var ball;
var score = 0;
var count = 0;
var gameState = "start";

function setup()
{
    createCanvas(800,800);

    myEngine = Engine.create();
    myWorld = myEngine.world;
    //create the ground
    ground = new Ground(width/2,height,width-20,20);

    //creating the divisions
    for(var i=5;i<=width;i=i+60)
    {
        division.push(new Division(i,height-divht/2,10,divht));
    }

    //creating plinkos
    for(var i= 50;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,50));
    }
    for(var i= 20;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,100));
    }
    for(var i= 50;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,150));
    }
    for(var i= 20;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,200));
    }
    for(var i= 50;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,250));
    }
    for(var i= 20;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,300));
    }
    for(var i= 50;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,350));
    }
    for(var i= 20;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,400));
    }
}
function draw()
{
    background(0);
    //display the score
    textSize(20);
    fill("white");
    text("score :" +score,20,30);
    textSize(30);
    fill("green");
    text("Press Any Key To Play",250,30)
    //display the score count
    textSize(20);
    fill("white");
    text("500",18,510);
    text("500",80,510);
    text("500",140,510);
    text("500",200,510);
    text("500",260,510);
    text("100",320,510);
    text("100",380,510);
    text("100",440,510);
    text("200",500,510);
    text("200",560,510);
    text("200",620,510);
    text("200",680,510);
    text("200",740,510);


    Engine.update(myEngine);

    ground.display();

    //end state
    if(gameState == "end")
    {
        textSize(100);
        fill("orange");
        text("GAME OVER",150,200);
    }

    //creating the balls
   /*if(frameCount % 30 === 0)
    {
        balls.push(new Ball(random(200,700),10,10));
        //console.log(balls.length);
        //balls.push(new Ball(random(width/2-30,width/2+30),10,10));
        
    }
     //displaying the balls
    for(var i = 0; i < balls.length; i++)
    {
        balls[i].display();
    }*/
    //displaying plinko
    for(var i=0; i<plinko.length;i++)
    {
        plinko[i].display();
    }
    //displaying balls
    if(ball != null)
    {
       ball.display();

       //checking for score
       if(ball.body.position.y > 600)
       {
       if(ball.body.position.x < 300)
        {
           score = score+500;
           ball = null;
           if(count >= 5) gameState = "end";
        }
        else if(ball.body.position.x>301 && ball.body.position.x <450)
        {
            score = score+100;
            ball = null;
            if(count >= 5) gameState = "end";
        }
        else if(ball.body.position.x>451 && ball.body.position.x <800)
        {
            score = score+200;
            ball = null;
            if(count >= 5) gameState = "end";
        }
       }
    }
    //displaying divisions
    for(var i=0; i<division.length;i++)
    {
        division[i].display();
    }
}

function keyPressed() 
{
  if(gameState !== "end"){
      count++;
      ball = new Ball(random(100,800),10,10);
  }
}
    


