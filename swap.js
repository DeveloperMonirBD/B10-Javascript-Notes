let a = 5;
let b = 7;
//wrong:
console.log(a, b);
// a = b;
// b = a;

// swap: right 
const temp = a;
a = b
b = temp;

console.log(a, b);

//Another swap: destructring:-
let x = 6;
let y = 9;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

console.log(Math.pow(2, 3));