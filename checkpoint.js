// Reverse String
function reverseString(str) {
  return str.split("").reverse().join("");
}
let inputString = "Amine, Jaouadi!";
let reversedString = reverseString(inputString);
console.log(reversedString);

// Count Characters
function countCharacters(str) {
  return str.length;
}

let exampleString = "Bonjour, Amine!";
let characterCount = countCharacters(exampleString);
console.log(`${characterCount}`);

// Capital word
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
}

const exampleSentence = "hello world, this is me.";
const capitalizedSentence = capitalizeWords(exampleSentence);
console.log(capitalizedSentence);

// Min-Max
function findMax(array) {
  return Math.max(...array);
}

function findMin(array) {
  return Math.min(...array);
}

let numbers = [3, 5, 1, 15, 2, -9];

let maxValue = findMax(numbers);
let minValue = findMin(numbers);

console.log(`${maxValue}`);
console.log(`${minValue}`);

// sumOfArray
function sumArray(array) {
  return array.reduce((total, current) => total + current, 0);
}
let num = [1, 2, 3, 4, 5];
let totalSum = sumArray(numbers);
console.log(`${totalSum}`);

// FilterArray
function filterArray(array, condition) {
  return array.filter(condition);
}

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(` ${evenNumbers}`);
const greaterThanFive = filterArray(numbers, (num) => num > 5);
console.log(`${greaterThanFive}`);
// Factorial
function factorial(n) {
  if (n < 0) {
    return undefined; // Factorial is not defined for negative numbers
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1

// prime Number
function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime numbers

  // Check for even numbers and multiples of 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check for factors from 5 to the square root of num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true; // num is prime
}

// Example usage:
console.log(isPrime(5)); // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(13)); // Output: true
console.log(isPrime(1)); // Output: false

// fabonacci
function generateFibonacci(n) {
  const fibonacci = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacci.push(0); // First term
    } else if (i === 1) {
      fibonacci.push(1); // Second term
    } else {
      // Subsequent terms are the sum of the previous two
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }

  return fibonacci;
}

// Example usage:
const terms = 10;
const fibonacciSequence = generateFibonacci(terms);
console.log(`Fibonacci sequence up to ${terms} terms:`, fibonacciSequence);
// Output: Fibonacci sequence up to 10 terms: [0, 1, 1, 2, 3, 5, 8,
