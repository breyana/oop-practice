const calculator = {
  read() {
    this.a = parseInt(prompt('First value'))
    this.b = parseInt(prompt('Second value'))
  },

  sum() {
    return this.a + this.b
  },

  mul() {
    return this.a * this.b
  }
}

//given actions that are done after function is defined
calculator.read()
alert( calculator.sum() )
alert( calculator.mul() )
