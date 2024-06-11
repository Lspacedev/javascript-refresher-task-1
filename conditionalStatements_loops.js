//Exercise 1: Temperature check
console.log("Exercise 1: Temperature check:");

let temperature = 13;

if (temperature <= 0) {
  console.log("It's freezing!");
} else if (temperature > 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else if (temperature > 25) {
  console.log("It's warm.");
}

switch (true) {
  case temperature <= 0:
    console.log("It's freezing!");
    break;
  case temperature > 0 && temperature <= 15:
    console.log("It's cold.");
    break;
  case temperature >= 16 && temperature <= 25:
    console.log("It's mild.");
    break;
  case temperature > 25:
    console.log("It's warm.");
    break;
}

//Exercise 2: Divisibility Check
console.log("Exercise 2: Divisibility Check:");

let num = 9;
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Divisible by both.");
} else if (num % 2 == 0) {
  console.log("Divisible by 2.");
} else if (num % 3 == 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not  divisible by 2 or 3.");
}

switch (true) {
  case num % 2 == 0 && num % 3 == 0:
    console.log("Divisible by both.");
    break;
  case num % 2 == 0:
    console.log("Divisible by 2.");
    break;
  case num % 3 == 0:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not  divisible by 2 or 3.");
    break;
}

//Exercise 3: For loops
console.log("Exercise 3: For loops:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let k = 1; k < 20; k++) {
  if (k % 2 == 0) {
    console.log(k);
  }
}

let sum = 0;
for (let j = 1; j <= 100; j++) {
  sum += j;
}

console.log(sum);

const numbers = [1, 2, 3, 4, 5];

for (let n = 0; n < numbers.length; n++) {
  console.log(numbers[n]);
}

const numbers2 = [3, 7, 2, 5, 10, 6];

let largest = 0;

for (let l = 0; l < numbers2.length; l++) {
  if (numbers2[l] > largest) {
    largest = numbers2[l];
  }
}

console.log(largest);

//Exercise 4: While loops
console.log("Exercise 4: While loops:");
let z = 1;
while (z <= 10) {
  console.log(z);
  z++;
}

let e = 1;
while (e < 20) {
  if (e % 2 == 0) {
    console.log(e);
  }

  e++;
}

let sum2 = 0;
let t = 1;
while (t <= 100) {
  sum2 += t;
  t++;
}

console.log(sum2);

let f = 1;
while (f < 50) {
  if (f % 5 == 0) {
    console.log(f);
  }
  f++;
}

//Exercise 5: Do While loops
console.log("Exercise 5: Do While loops");
let d = 1;

do {
  console.log(d);
  d++;
} while (d <= 10);

let sum3 = 0;
let c = 1;

do {
  sum3 += c;
  c++;
} while (c <= 100);

console.log(sum3);

let userNum = 0;
let correctNum = 20;

do {
  userNum = prompt("Please enter a number greater than 10: ");
} while (userNum != 20);

//guessing game
let userInput = 0;
let gameNum = 7;

do {
  userInput = prompt("Please enter a number between 1 and 10: ");
} while (userInput != gameNum);
