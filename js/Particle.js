class Particle {
  constructor(x, y, radius) {
    var options = {

    }
    this.body = Bodies.circle(x, y, radius, options);
    this.color = color(random(0, 255), random(0, 255), random(0, 255))
    this.d = radius * 2;
    this.status = 0 // 0-particle is out, 1-particle is in
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    fill(this.color);
    noStroke();
    ellipse(pos.x, pos.y, this.d, this.d);
    if (this.status == 0 && pos.y > 400) {
      this.status = 1;
      chance--;
      if ((pos.x > 10 && pos.x < 40) || (pos.x > 460 && pos.x < 490))
        score += 100;
      else if ((pos.x > 60 && pos.x < 90) || (pos.x > 410 && pos.x < 440))
        score += 80;
      else if ((pos.x > 110 && pos.x < 140) || (pos.x > 360 && pos.x < 390))
        score += 60;
      else if ((pos.x > 160 && pos.x < 190) || (pos.x > 310 && pos.x < 340))
        score += 40;
      else if ((pos.x > 210 && pos.x < 240) || (pos.x > 260 && pos.x < 290))
        score += 20;
    }
  }
};
