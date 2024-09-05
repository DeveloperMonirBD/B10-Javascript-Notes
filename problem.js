// Even or Odd numbers:-

let numbers = [432, 43, 453, 56, 84, 95, 23, 48, 90, 72, 592]

//Even numbers:-
let even = [];
for (let item of numbers) {
  if (item % 2 === 0) {
    even.push(item)
  }
}
console.log(even);

//Odd numbers:-
let odd = [];
for (let item of numbers) {
  if (item % 2 !== 0) {
    odd.push(item)
  }
}
console.log(odd)

