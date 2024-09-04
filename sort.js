const persons = ['rakib', 'nokib', 'sakib', 'akib', 'rafin'];

const sortedPersons = persons.sort();
console.log(sortedPersons);

// sort --> sajanooo
const numbers = [4, 7, 12, 43, 8, 3, 6, 1];
// Assending --> smaller to larger.
//Desending --> Larger to smaller.
// const numbers_asc = numbers.sort(); //always not working

//...numbers ==> mane holo numbers array k copy korea naua
const numbers_asc = [...numbers].sort(function (a, b) {
    return a - b;
});

const numbers_dsc = [...numbers].sort(function (a, b) {
    return b - a;
});

console.log(numbers_asc);
console.log(numbers_dsc);
