/**
 * Year will be a leap year if the year is divisible by 4.
 * those year is not divisible by 100 and if the year is divisible by 4: then it will be a leap year.
 * if the year us divisible by 400, than it is a leap year
 * else it is not a leap year
 */


function isLeapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(`${year} is a leap year !`);
    } else {
        console.log(`${year} is not a leap year !`);
    }
}

isLeapYear(2022);