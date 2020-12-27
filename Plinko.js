class Plinko
{
  constructor(x,y)
  {
      var opt = {
           isStatic : true,
           restitution : 1,
           friction : 0
      }
      this.body = Bodies.circle(x,y,10,opt);
      World.add(myWorld,this.body);
  }
  display()
  {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      noStroke;
      fill("cyan");
      ellipseMode(CENTER);
      ellipse(0,0,10,10);
      pop();
  }
}