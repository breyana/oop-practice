function Bike() {
  this.moving = false,
  this.tires = [new Tire(), new Tire()]
  this.rings = [3, 7]
}

Bike.prototype.isMoving = function() {
  return this.moving
}

Bike.prototype.pedal = function() {
  if (this.tires[0].flat === true || this.tires[1].flat === true) {
    throw new Error("Can't pedal with a flat tire")
  }
  this.moving = true
}

Bike.prototype.brake = function() {
  this.moving = false
}

Bike.prototype.gearSpeeds = function () {
  return this.rings.reduce((acc, next) => {
    return acc * next
  }, 1)
};


function Tire() {
  this.flat = false
}

Tire.prototype.isFlat = function() {
  return this.flat
}

Tire.prototype.puncture = function() {
  this.flat = true
}

Tire.prototype.repair = function() {
  this.flat = false
}

module.exports = {
  Bike: Bike,
  Tire: Tire
}
