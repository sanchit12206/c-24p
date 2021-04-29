class rubber {
    constructor(x, y) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':0.3
      };
      this.body = Bodies.circle(x, y, 70, options);

      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('blue')
      ellipseMode(RADIUS)
      ellipse(0, 0,70,70);
      pop();
    };
  };