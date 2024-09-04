//reverse: mane ultanoo ...
const sentence = 'I am learning Web Dev.'

//akta akta korea letter k dakhabe.

let reverse = '';
for (letter of sentence) {
  // console.log(letter);
  reverse = letter + reverse;
}
// console.log(reverse)

let rev = ''
for (let i = 0; i < sentence.length; i++) {
  // console.log(i);
  // console.log(sentence[i]);
  const letter = sentence[i];
  rev = letter + rev;
}

// console.log(rev)

//shortcut:-
const reversed = sentence.split('').reverse().join('');
// console.log(reversed)



const numbers = [1, 2, 3, 4, 5, 6, 7]; 
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);



const rev_numbers = [];

// for (const num of numbers) {
//   // console.log(num);
//   // rev_numbers.push(num);
//    rev_numbers.unshift(num);
// }


for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  rev_numbers.unshift(num);
}

// console.log(rev_numbers);


//reverse side. Decremental for loop side:
const rev_rev_numbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  console.log(num);
  rev_rev_numbers.push(num)
}
console.log(rev_rev_numbers)