// if statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
// Output: You are an adult.

// if...else statement
age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// Output: You are a minor.

// else if statement
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// Output: Grade: B

// switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Unknown day");
}
// Output: Wednesday

// for loop
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}
// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4

// while loop
let i = 0;
while (i < 5) {
  console.log("The number is " + i);
  i++;
}
// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4

// do...while loop
i = 0;
do {
  console.log("The number is " + i);
  i++;
} while (i < 5);
// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4
