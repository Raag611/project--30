class Slingshot{
    constructor(bodyA,poindB){
    var options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffniess: 20
    }
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB;

            strokeWeight(4);
            fill("red");
            line(pointA.x,pointA,pointB.x,pointB.y);

        }
    }

}