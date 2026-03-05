class Arithmeic_Operations {
  constructor(a = 0, b = 0) {
    this.a = a;
    this.b = b;
  }
  add = () => this.a + this.b;
  sub = () => this.a - this.b;
  multiply = () => this.a * this.b;
}

let obj = new Arithmeic_Operations(10, 15);
let plus = obj.add();
let subtract = obj.sub();
let product = obj.multiply();

document.getElementById("output").innerHTML =
  `plus is ${plus}; subtarct is ${subtract}; product is ${product}`;
