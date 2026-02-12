// non-primitive data type: Objects are used to store collections of data and more complex entities
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    }
};
console.log(person); // Output: entire person object

console.log(person.firstName); // Output: John
console.log(person.address.city); // Output: New York

person.email = "wjattin@miami.edu"; // Adding a new property
console.log(person); // Output:

let person2 = {}; // Creating an empty object
person2.firstName = "Jane";
person2.lastName = "Smith";
person2.age = 25;
console.log(person2); // Output: person2 object with properties