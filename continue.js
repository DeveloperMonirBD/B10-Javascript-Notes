// continue: skip rest of the code for this iteration.
// for (let i = 1; i < 10; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }

// continue while loop:
// let n = 0;

// while (n < 30) {
//   n++;
//   if (n % 5 !== 0) {
//     continue;
//   }
//   console.log(n);
// }

//what is the output ?
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
