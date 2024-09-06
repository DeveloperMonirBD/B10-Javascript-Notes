/**
 * Objective: write a function to give me the sum numbers in an array
 * step-1: declare a function
 * step-2: call check weather the function  is called property
 * step-3: set a parameter(s)
 * step-4: pas the parameter(s), check weather parameter is passed in a proper format
 * step-5: do the function tasks (step by step)
 */

function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum = sum + number
  }
  return sum

}
const nums = [54, 32, 75, 12, 8]
const sum = sumOfNumbers(nums);
console.log('Sum of numbers is: ' + sum)