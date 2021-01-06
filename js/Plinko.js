class Plinko{
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.d= radius * 2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
      noStroke();
      ellipse(pos.x, pos.y, this.d, this.d);
    }
  };
