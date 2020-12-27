class Ground
{
    constructor(x,y,w,h)
    {
        var opt = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,opt);
        this.w = w;
        this.h = h;
        World.add(myWorld,this.body);
        
    }
    display()
    {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);
    }
}