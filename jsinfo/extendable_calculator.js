function Calculator() {
  this.calculate = function(string) {
    let split = string.split(' ')
    a = +split[0]
    operand = split[1]
    b = split[2]

    if (!this.operands[operand]) {
      throw new Error("The operation doesn't exist")
    }
    let result = this.operands[operand](a, b)
    return result
  },

  this.addMethod = function(operand, func) {
    this.operands[operand] = func
  },

  this.operands = {
    '+': (a, b) => a + b
  }
}


//actions to run after the function has been defined
let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
