function Calculator() {
  this.read = function() {
    this.a = parseInt(prompt('First value'))
    this.b = parseInt(prompt('Second value'))
  },

  this.sum = function() {
    return this.a + this.b
  },

  this.mul = function() {
    return this.a * this.b
  }
}


//actions to take after function is defined
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
