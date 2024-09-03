/*
 ** Ternary --> Three parts
 ** condition ? true : false
 */
//normal if-else:
// const age = 12;
// if (age >= 18) {
//    console.log('You are vote.')
// } else {
//   console.log('You can not vote')
// }

//simpla ternary:
// const age = 17;
// age >= 18 ? console.log('you are vote.') : console.log('you can not vote');

// let price = 500;
// const isLeader = false;

// if (isLeader === true) {
//   price = 0;

// } else {
//   price = price + 100
// }
// console.log(price)

// ternary:
let price = 400;
let isLeader = false;
price = isLeader === true ? 0 : price + 100;
console.log(price);

//Remember: Logical not operator:
// !true ==> return false
// !false ==> return true
// !"" ==> return true
// !"Cat" ==> return false

// !!true ==> returns true
// !!false ==> returns false

let isEnabled = true;
isEnabled = !isEnabled; //Togging the boolean value

console.log(isEnabled); //Output: false

// Checking for falsy value:
let inputValue = null;

if (!inputValue) {
    console.log('input value is falsy');
}

//Chacking for Truthy values:
let userInput = 'someValue';

if (!userInput) {
    console.log('User inpur is empty');
} else {
    console.log('User input is: ' + userInput);
}

let userId = 10;
console.log(!!userId);
//expected output ==> true

console.log(!userId);
//expected output ==> false

console.log(userId);
//expected output ==> 10



let number = 10;
if (number % 2 == 0) {
    console.log('Even number');
} else {
    console.log('odd number');
}

console.log(6 != 6)



let score = 75;
let grade;
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
}
console.log(grade);


var num = 10;
if (num > 15) {
    console.log('Greater than 15');
} else if (num > 5) {
    console.log('Greater than 5 but less than or equal to 15');
} else {
    console.log('Less than or equal to 5');
}

let result = 10 < '5';
console.log(result)

let x = 5;
if (x < 10) {
    x = x + 3;
} else {
    x = x - 2;
}
console.log(x);