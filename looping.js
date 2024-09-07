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

// for...in loop
const person = { fname: "John", lname: "Doe", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// fname: John
// lname: Doe
// age: 25

// for...of loop
const fruits = ["Banana", "Orange", "Apple"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// Banana
// Orange
// Apple
