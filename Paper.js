class Paper {

constructur(x,y){
    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2 
    }
    this.body = Bodies.ellipse(100,20,50,options);
    this.body.x = 100;
    this.body.y = 20;
    World.add(world, this.body);

}

display(){
    ellipseMode(RADIUS);
    fill("violet");
    ellipse(100,432,15);
}

}