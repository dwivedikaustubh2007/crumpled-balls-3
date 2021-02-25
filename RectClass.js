class RectClass{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        
        this.width=width;
        this.height=height;
        this.body1=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body1);
        this.body2=Bodies.rectangle(x-80,y-40,20,100,options);
        World.add(world,this.body2);
        this.body3=Bodies.rectangle(x+80,y-40,20,100,options);
        World.add(world,this.body3);
        this.image=loadImage("dustbingreen.png")
    }

    display(){
        var pos1=this.body1.position
        var pos2=this.body2.position
        var pos3=this.body3.position
        rectMode(CENTER);
        push();
        translate(pos1.x,pos1.y);
        fill("white");
        noStroke();
        rect(0,0,this.width,this.height)
        rect(-80,-40,20,100);
        rect(80,-40,20,100);
        imageMode(CENTER);
        image(this.image,0,-85,150,150)
        pop();
       
       
    }

}