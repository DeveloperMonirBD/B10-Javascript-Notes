const school = 'Raj UK Uttara Model School';
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'chemistry';

// if (subject === book) {
//   console.log('I am reading book')
// } else {
//   console.log('I am not reading book')
// }

// if (subject .toLocaleLowerCase() === book.toLocaleLowerCase()) {
//   console.log('I am reading book')
// } else {
//   console.log('I am not reading book')
// }

// trim:- akta string ar agea r pore white space thakle ta remove kore dai. but majhea white space thakle sorabe na .. jmon ---> wa ter.

const drink = ' water';
const liquid = 'water ';

if (drink.trim() === liquid.trim()) {
  console.log('We should trim')
} else {
  console.log('We should not trim')
}