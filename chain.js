class Chain {


constructor(bodyA,bodyB){

    var options = {
        bodyA : bodyA,
        bodyB : bodyB, 
        stiffness: 0.04,
        length: 10
       
       }

       this.chain = Constraint.create(options);
       World.add (world, this.chain);


    
}

display(){

    var ponitA = bird.body.position
    var ponitB = log6.body.position
    strokeWeight(4)
    line(pointA.x,pointA.y, pointB.x, pointB.y);
    
}



}