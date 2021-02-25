class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:30,
            stiffness:0.001
        }
        this.pointB=pointB;
        this.launch=Constraint.create(options);
        World.add(world,this.launch);
    }

    fly(){
        this.launch.bodyA=null;

    }

    display(){
        if(this.launch.bodyA){
            var posA=this.launch.bodyA.position;
            var posB=this.pointB;
            strokeWeight(4);
            line(posA.x,posA.y,posB.x,posB.y);
        }
    }
}