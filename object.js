// const age = 21;
// const school = "Rifle squire";
// const isPassed = true;
// let isPassed = true;
// let dedeloper;

// const subject = ['Bangla', 'English', 'Physics', 'Math']

const person = {
    name: 'Md. Monirul Islam',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: false
};

//dot notation: dot symbol diya object er property er value access kora.
// console.log(person.profession)

//bracked notation: third bracket diya object er property er value access kora.
// console.log(person['age']);
// console.log(person['salary']);

//keys:
// const computer = {
//   brand: 'lenovo',
//   price: 35000,
//   processor: 'Intel',
//   hdd: '512gb'
// }

// const keys = Object.keys(computer);
// console.log(keys);

// values:
const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'Intel',
    hdd: '512gb'
};

const values = Object.values(computer);
// console.log(values)

//Object:-
const identity = {
    name: 'Monir',
    address: 'Jashore.'
};
//delete obj item:-
// delete identity.name;

//add item in Obj:
identity.contact = 'mrmonir0558@gmail.com';
//change item in Obj:
identity.name = 'Rafin';

// console.log(identity);
// console.log(identity.name);
// console.log(identity.address);


const student = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Amir'],
    car: {
        brand: 'Tesla',
        price: 50000000,
        model: 2025
    }
}

console.log(student.car.price)