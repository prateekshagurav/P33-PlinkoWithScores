class Ground {
    constructor(width,height) {
      var options = {
          isStatic: true
      }
      this.bodyBottom = Bodies.rectangle(width/2,height-5,500,10,options);
      this.bodyTop = Bodies.rectangle(width/2,5,500,10,options);
      this.bodyRight = Bodies.rectangle(width-5,height/2,10,600,options);
      this.bodyLeft = Bodies.rectangle(5,height/2,10,600,options);
      World.add(world, this.bodyBottom);
      World.add(world, this.bodyTop);
      World.add(world, this.bodyRight);
      World.add(world, this.bodyLeft);
    }
    display(){
        var posBottom =this.bodyBottom.position;
        var posTop =this.bodyTop.position;
        var posRight =this.bodyRight.position;
        var posLeft =this.bodyLeft.position;
        rectMode(CENTER);
        fill("grey");
        noStroke();
      rect(posBottom.x, posBottom.y, 500,10);
      rect(posTop.x, posTop.y, 500,10);
      rect(posRight.x, posRight.y,10,600);
      rect(posLeft.x, posLeft.y, 10,600);
    }
  };
