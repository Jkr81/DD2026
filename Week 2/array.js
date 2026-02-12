// arrays store multiple values in a single variable
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits); // Output: entire array
// Accessing elements by index
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Orange

// Modifying elements
fruits[1] = "Grapes"; // Changing Banana to Grapes
console.log(fruits); // Output: updated array

// pushing new elements
fruits.push("Pineapple");
console.log(fruits); // Output: array with Pineapple added

// removing the last element
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: Pineapple
console.log(fruits); // Output: array without Pineapple

// getting the length of the array
console.log(fruits.length); // Output: number of elements in the array