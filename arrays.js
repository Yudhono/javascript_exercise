// Creating an array of fruits
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Add a new fruit to the end
fruits.push("Pineapple");
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango", "Pineapple"]

// Remove the last fruit
fruits.pop();
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]

// Add a new fruit to the beginning
fruits.unshift("Strawberry");
console.log(fruits); // ["Strawberry", "Banana", "Orange", "Apple", "Mango"]

// Remove the first fruit
fruits.shift();
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]

// Select a part of the array
const citrus = fruits.slice(1, 3);
console.log(citrus); // ["Orange", "Apple"]

// Iterate over each fruit
fruits.forEach(function (item, index) {
  console.log(index, item);
});
// Output:
// 0 Banana
// 1 Orange
// 2 Apple
// 3 Mango
