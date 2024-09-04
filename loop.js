/* 
* Looping Technique
* 1. for loop
* 2. while loop
* 3. do while --> ignore
* 4. for of --> array loop korar jonno
* 5. for in --> object loop korar jonno
*/


const mobile = {
  brand: 'samsung',
  price: '25000',
  color: 'black',
  camera: '12mp'
}

//for of: array ar moddhea salano hoi.
//for in: Object ar moddhea salano hoi.

for (const prop in mobile) {
  // console.log(prop)

  //bracket notation:
  // console.log(mobile[prop])
}

const keys = Object.keys(mobile);
// console.log(keys);

//keys akn arrea hoiea gasea jar karone for of baboher korte pare.
// for (const key of keys) {
//   console.log(key, ':', mobile[key])
// }


const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for (const friend of friends) {
  // console.log(friend)
}

for (let i = 0; i < friends.length; i++) {
  // console.log(i);
  // // console.log(friends[3])
  // console.log(friends[i])
}


const numbers = [5, 23, 456, 432, 434, 32, 343, 4535, 45, 542, 9]

for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i])
}


// while:

let n = 0;

while (n < numbers.length) {
  // console.log(numbers[n])
  n++
}
