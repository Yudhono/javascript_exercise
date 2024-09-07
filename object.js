const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  eyeColor: "blue",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  greet: function () {
    return "Hello, my name is " + this.fullName();
  },
};

// Accessing properties
console.log(person.firstName); // John
console.log(person["lastName"]); // Doe

// Using methods
console.log(person.fullName()); // John Doe
console.log(person.greet()); // Hello, my name is John Doe

// Modifying properties
person.age = 31;
console.log(person.age); // 31

// Adding new properties
person.nationality = "American";
console.log(person.nationality); // American

// Deleting properties
delete person.eyeColor;
console.log(person.eyeColor); // undefined
