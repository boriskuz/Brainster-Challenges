'use strict';

// - From the given 3 numbers , find the smallest and largest, and check
// are they prime.
// Example :
// Number = 13;
// Number2 = 15;
// Number3 = 20;
// Smallest - 13 , Largest-20
// The smallest number 13 is prime , The largest number 20 is not prime.

const num1 = 6;
const num2 = 59;
const num3 = 71;
let largestNumber;
let smallestNumber;

largestNumber = Math.max(num1, num2, num3);
smallestNumber = Math.min(num1, num2, num3);

console.log(`Smallest number is ${smallestNumber} and the largest number is ${largestNumber}.`);

function checkPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

if (checkPrime(smallestNumber) && !checkPrime(largestNumber)) {
  console.log(`The smallest number ${smallestNumber} is prime, but the largest number ${largestNumber} is not prime.`);
} else if (checkPrime(largestNumber) && !checkPrime(smallestNumber)) {
  console.log(`The largest number ${largestNumber} is prime, but the smallest number ${smallestNumber} is not prime.`);
} else if (checkPrime(largestNumber) && checkPrime(smallestNumber)) {
  console.log(`Both of the numbers ${smallestNumber} and ${largestNumber} are prime numbers.`);
}
