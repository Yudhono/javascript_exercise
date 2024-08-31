// JavaScript Fundamentals Exercise

console.log("=== Section 1: Variables and Data Types ===");

// 1.1 Variable Declaration
let firstName = "YourName"; // Replace with your name
let age = 16; // Replace with your age
let isStudent = true; // Replace with true or false

console.log(`First Name: ${firstName}, Age: ${age}, Is Student: ${isStudent}`);

// 1.2 Data Types Identification
let city = "New York";
let temperature = 23.5;
let isRaining = false;
let unknownVariable;
let emptyValue = null;

console.log(`Data Type of city: ${typeof city}`);
console.log(`Data Type of temperature: ${typeof temperature}`);
console.log(`Data Type of isRaining: ${typeof isRaining}`);
console.log(`Data Type of unknownVariable: ${typeof unknownVariable}`);
console.log(`Data Type of emptyValue: ${typeof emptyValue}`);

console.log("\n=== Section 2: Operators and Arithmetic ===");

// 2.1 Basic Arithmetic Operations
let a = 10;
let b = 5;

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;
let exponentiation = a ** b;

a++;
let increment = a;

b--;
let decrement = b;

console.log(`Addition: ${addition}`);
console.log(`Subtraction: ${subtraction}`);
console.log(`Multiplication: ${multiplication}`);
console.log(`Division: ${division}`);
console.log(`Modulus: ${modulus}`);
console.log(`Exponentiation: ${exponentiation}`);
console.log(`Increment: ${increment}`);
console.log(`Decrement: ${decrement}`);

// 2.2 Operator Prediction
let x = 15;
let y = "15";
console.log(x === y); // Prediction: false

let num = "10";
num += 5;
console.log(num); // Prediction: "105"

let p = 8;
let q = 3;
console.log(p % q); // Prediction: 2

console.log("\n=== Section 3: Functions ===");

// 3.1 Function Creation
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Example output: "Hello, Alice!"

// 3.2 Function Usage
function square(number) {
  return number * number;
}

console.log(square(4)); // Expected output: 16

// 3.3 Function with Multiple Operations
function calculateArea(width, height) {
  let area = width * height;
  console.log(`Width: ${width}`);
  console.log(`Height: ${height}`);
  console.log(`Area: ${area}`);
  return area;
}

calculateArea(5, 3); // Example output in logs

console.log("\n=== Section 4: Combined Challenge ===");

// 4.1 Simple Calculator
let num1 = 20;
let num2 = 4;
let operator = "+"; // Change this to test other operators

function calculate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Invalid operator";
  }
}

console.log(calculate(num1, num2, operator)); // Example output: 24

// 4.2 Data Type Exploration
function typeChecker(value) {
  console.log(`The type of ${value} is ${typeof value}`);
}

typeChecker("Hello");
typeChecker(100);
typeChecker(true);
typeChecker([1, 2, 3]);
typeChecker({ a: 1 });
typeChecker();
typeChecker(null);

console.log("\n=== Section 5: Bonus Questions ===");

// 5.1 Variable Scope
function scopeTest() {
  let outerVar = "I am outside!";
  if (true) {
    let innerVar = "I am inside!";
    console.log(outerVar); // Expected output: "I am outside!"
    console.log(innerVar); // Expected output: "I am inside!"
  }
  // Uncomment the following line to see the error in the console
  // console.log(innerVar); // Expected error: innerVar is not defined
}

scopeTest();

// 5.2 Type Conversion
let value = "5" + 3;
let convertedValue = Number("5") + 3;
console.log(value); // Expected output: "53"
console.log(convertedValue); // Expected output: 8
