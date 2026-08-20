class Value {
  private state: number;

  constructor(value: number) {
    this.state = value;
  }

  calculate(operations: Array<Operation>): Value {
    let tmp: number = this.state;
    for (const operation of operations) {
      tmp = operation.perform(tmp);
    }
    return new Value(tmp);
  }

  value(): number {
    return this.state;
  }
}

abstract class Operation {
  private operand: number;

  constructor(operand: number) {
    this.operand = operand;
  }

  perform(x: number): number;
}

class Add extends Operation {
  perform(x: number): number {
    return x + this.operand;
  }
}

class Sub extends Operation {
  perform(x: number): number {
    return x - this.operand;
  }
}

class Mul extends Operation {
  perform(x: number): number {
    return x * this.operand;
  }
}

class Div extends Operation {
  perform(x: number): number {
    return x / this.operand;
  }
}

const x = new Value(7);
const result = x.calculate([new Add(1), new Div(2), new Sub(1), new Mul(2)]); // (((7 + 1) : 2) - 1) * 2 = 6
console.log(result.value());
