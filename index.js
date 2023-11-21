// Task: Write a function greet that takes a name as an argument and returns "Hello, [name]!"

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Sam")); // Pass "Sam" as a string

// Exercise 2: Arrow Function
// Task: Convert the above greet function into an arrow function.
const greet2 = name => `Hello, ${name}!`; 
console.log(greet2("bryan"));

// Exercise 3: Array.map()
// Task: Create an array of numbers. Use .map() to create a new array with each number squared

// const numbersArray = [1, 2, 3, 4, 5];

// function newSquare (numbersArray) {
//     let newArray = numbersArray.map(num => num * num);
//     return newArray;   
// }
// console.log(newSquare(numbersArray));
// Arrow function version
// const squaredArray = numbersArray.map(num => num * num);

const numbers = [10, 5, 20, 25, 30];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(numbers);
console.log(evenNumbers);

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

// Exercise 6: Combining Array Methods
// Task: Given an array of numbers, find the sum of the squares of only the even numbers.

const sumOfSquares = numbers.filter(num => num % 2 === 0)
.map(num => num * num).reduce((acc, curr)=> acc + curr, 0);

console.log(sumOfSquares);




