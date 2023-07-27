'use strict';

// - Use conditions to check if a given number is even. If so , print with
// console.log “ The Number (TheNumberYouWrote) is even ". If the
// number is not even, print " The Number (TheNumberYouWrote) is not
// even".

const num1 = Number(prompt('Please add a number:'));

if (num1) {
  if (num1 % 2 === 0) {
    console.log(`The number ${num1} is even.`);
  } else {
    console.log(`The number ${num1} is not even.`);
  }
} else {
  console.log('The input you entered is not a number. Please add a number.');
}
