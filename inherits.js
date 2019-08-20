
Function.prototype.inherits = function(Parent) {
  function Surrogate() {};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = Child;
};

function MovingObject(xSpeed, ySpeed, startingPoint) { 
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  this.location = startingPoint;
}

MovingObject.prototype.move = function() {
  let [x, y] = this.location;
  this.location = [x + this.xSpeed, y + this.ySpeed];
  return this.location;
};

function Ship(xSpeed, ySpeed, startingPoint, color) {
  MovingObject.call(this, xSpeed, ySpeed, startingPoint);
  this.color = color;
 }

Ship.inherits(MovingObject);

Ship.prototype.takeOff = function() {
  console.log("Blast Off");
};

function Asteroid(xSpeed, ySpeed, startingPoint, diameter) {
  MovingObject.call(this, xSpeed, ySpeed, startingPoint);
  this.diameter = diameter;
}

Asteroid.inherits(MovingObject);

let rock = new Asteroid(1, 1, [0,0], 9);
let rocket = new Ship(2, 2, [2,2], "blue");
let planet = new MovingObject(3, 3, [0,0]);


// As Object.create

function MovingObject(xSpeed, ySpeed, startingPoint) {
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  this.location = startingPoint;
}

MovingObject.prototype.move = function () {
  let [x, y] = this.location;
  this.location = [x + this.xSpeed, y + this.ySpeed];
  return this.location;
};

function Ship(xSpeed, ySpeed, startingPoint, color) {
  MovingObject.call(this, xSpeed, ySpeed, startingPoint);
  this.color = color;
}

Ship.prototype = Object.create(MovingObject.prototype);

Ship.prototype.takeOff = function () {
  console.log("Blast Off");
};

function Asteroid(xSpeed, ySpeed, startingPoint, diameter) {
  MovingObject.call(this, xSpeed, ySpeed, startingPoint);
  this.diameter = diameter;
}

Asteroid.inherits(MovingObject);

let rock = new Asteroid(1, 1, [0, 0], 9);
let rocket = new Ship(2, 2, [2, 2], "blue");
let planet = new MovingObject(3, 3, [0, 0]);