// const Math = {
//   min: function min(num1, num2) {
//     return num2
//   }
// }

// console.log(Math.min);

const min = Math.min(45, 21, 65, 99, 126, 5);
console.log(min);

const max = Math.max(45, 21, 65, 99, 126, 5);
console.log(max);

console.log(Math.PI);
console.log(Math.abs(10 - 5))
console.log(Math.round(4.85))
console.log(Math.floor(4.85))
console.log(Math.ceil(2.85))
console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.round(Math.random() * 10))
console.log(Math.sqrt(4));

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}