function fromJSON(proto, json) {}

const Circle = function Circle(radius) {
  this.radius = radius;
};

Circle.prototype.getCircumference = function getCircumference() {
  return 2 * Math.PI * this.radius;
};

fromJSON(Circle.prototype, '{ "radius":10 }');
