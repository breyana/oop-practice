function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  alert(this.name + ' walks');
};

function Rabbit(name) {
  this.name = name;
}

//here is the corrected line
Rabbit.prototype.__proto__ = Animal.prototype;

Rabbit.prototype.walk = function() {
  alert(this.name + " bounces!");
};
