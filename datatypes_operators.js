//Exercise 1: Numbers
let num1 = 6;
let num2 = 2.5;
let num3 = 2;

let addition = num1 + num3;
let subtraction = num1 - num3;
let multiplication = num1 * num3;
let division = num1 / num3;
let modulus = num1 % num3;
let exponentiation = num1 ** num3;

console.log(num1);
console.log(num2);
console.log(num3);

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(modulus);
console.log(exponentiation);

//Exercise 2: Boolean and Operators
//1
let q = 10;
let w = 15;

let isGreater = q > w;
let isLesser = q < w;
let isEqual = q == w;
let isNotEqual = q != w;
//2
let x = 8;
let y = 12;

let isXGreater = x > y;
let isXLessOrEqual = x <= y;
let isXEqual = x == y;
let isXNotEqual = x != y;

console.log(isXGreater);
console.log(isXLessOrEqual);
console.log(isXEqual);
console.log(isXNotEqual);

//3
let a = true;
let b = false;

let AB = a && b;
let AOrB = a || b;
let notA = !a;

console.log(AB);
console.log(AOrB);
console.log(notA);

//4
let p = 10;
p += 5;
console.log(p);

p -= 5;
console.log(p);

p *= 5;
console.log(p);

p /= 5;
console.log(p);

p %= 5;
console.log(p);
