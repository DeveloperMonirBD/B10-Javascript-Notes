// ### Task-1
// Take four parameters. Multiply the four numbers and then return the result.

function multAll(a, b, c, d) {
    const multiply = a * b * c * d;
    console.log('#Task-1 Multiply result is : ' + multiply);
}

multAll(2, 4, 3, 6);

// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function number() {
    const num = 25;
    if (num % 2 === 0) {
        return '#Task-2 Divided Result is: ' + num / 2;
    } else {
        return '#Task-2 Multiply Result is: ' + num * 2;
    }
}

console.log(number());

// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(array) {
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        average += currentNum;
    }
    average = average / array.length;
    return average;
}

const array = [23, 43, 14, 36, 74];
const avgNumber = make_avg(array);
console.log('#Task-3 Average numbers is: ' + avgNumber);

// ### Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryString) {
    let count = 0;

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] == 0) {
            count++;
        }
    }
    return count;
}

let binaryString = '0100101010';
const countNumber = count_zero(binaryString);
console.log('#Task-4: binaryString count-zero is : ' + countNumber);

// ### Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

function odd_even() {
    const num = 34;
    if (num % 2 === 0) {
        return '#Task-5 Even Number: ' + 'Even';
    } else {
        return '#Task-5 Odd Number: ' + 'Odd';
    }
}
console.log(odd_even());
