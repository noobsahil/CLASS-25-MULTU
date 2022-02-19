class ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    var Options = {
      restitution: 0.1,
      frictionAir: 0.01,
    };

    this.body = Bodies.circle(this.x, this.y, this.r, Options);
    World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);

    ellipseMode(RADIUS);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}
