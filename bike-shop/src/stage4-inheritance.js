'use strict'

class Frame {
// your code here
}

class Tire {
  constructor(type='default', diameter) {
    this.type = type
    this.diameter = diameter
  }
}

function Bike() {
  this.moving = false
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
  return this.rings.reduce(((acc, next) => acc * next), 1)
};

class MountainBike extends Bike {
  constructor() {
    super()
    this.frame = { style: 'mountain' }
    this.tires = [new Tire('dirt'), new Tire('dirt')]
    this.shocks = 20
  }

  adjustShocks(sag) {
    this.shocks = sag
  }
}

class BMXBike extends Bike {
  constructor() {
    super()
    this.brakes = {
      front: false,
      back: true
    }
    this.tires = [new Tire('default', 20), new Tire('default', 20)]
  }

}

class RacingBike extends Bike {
  constructor() {
    super()
    this.frame = { style: 'racing' }
    this.tires = [new Tire('road'), new Tire('road')]
    this.rings = [3,10]
  }

}



module.exports = {
  Bike: Bike,
  MountainBike: MountainBike,
  BMXBike: BMXBike,
  RacingBike: RacingBike
}
