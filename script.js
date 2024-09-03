//Comparison Operator:-
// console.log(5 > 10);
// console.log(5 < 10);
// console.log(5 == 10);
// console.log(15 >= 10);
// console.log(15 <= 10);
// console.log(10 != 10);
// console.log(10 != '10');
// console.log(10 !== '10');
// console.log(typeof (10 !== '10'));

//Conditional statement:-
//1.

// const age = 12;

// if (age > 10) {
//     console.log('আপনি মেলায় ঢুকতে পাবেন!');
// } else {
//     console.log('দুঃখিত, আপনার বয়স কম। ফিরে যান');
// }

//2.
// var age = 15;

// if (age >= 18) {
//   console.log("আপনি যেকোনো রাইডে যেতে পারবেন");
// } else if (age >= 13) {
//   console.log('আপনি কিছু রাইডে যেতে পারবেন');
// } else {
//   console.log("আপনি শুধু বাচ্চাদের রাইডে যেতে পারবেন।");
// }

// 3.
// let age = 17;
// let withAdult = false;

// if (age >= 15) {
//     console.log('আপনি মেলায় ঢুকতে পারবেন!');
//     if (withAdult) {
//         console.log('আপনি ভৌতিক বাড়িতে যেতে পারবেন!');
//     } else {
//         console.log('ভৌতিক বাড়িতে ঢুকতে পারবেন না।');
//     }
// } else {
//     console.log('আপনি মেলায় ঢুকতে পারবেন না');
// }

// 4.
const salary = 25000;
const isBCS = true;
const height = 61;
const hasCar = true;

// if (salary > 20000 && height > 66) {
//   console.log('Su...Patro');
// } else {
//   console.log('Patro Posondo hoi ne')
// }

// if (salary > 20000 || height > 72) {
//   console.log('Su...Patro');
// } else {
//   console.log('Patro Posondo hoi ne')
// }

// if ((salary > 25000 && hasCar == true) || isBCS == true) {
//   console.log('Tomar 14 gosti reagi');
// } else {
//   console.log('Kawee rage naaa..')
// }

// if ((salary > 25000 || hasCar == true) && isBCS == true) {
//   console.log('Tomar 14 gosti reagi');
// } else {
//   console.log('Kawee rage naaa..')
// }

//Multi_Level Condotion:

// 5.
// const price = 3000;

// if (price >= 4000) {
//     //10% discount
//     const discount = (price * 10) / 100;
//     console.log(discount);
//     const payAmount = price - discount;
//     console.log(payAmount);
// } else if (price > 2500) {
//     const discount = (price * 5) / 100;
//     console.log(discount);
//     const payAmount = price - discount;
//     console.log(payAmount);
// } else {
//     console.log(price);
// }

// 6.

// const age = 50;
// const price = 500;

// if (age <= 12) {
//   console.log('You can eat for free');
// } else if (age >= 60) {
//   //50% discount
//   const discount = price * 50 / 100;
//   console.log(discount);
//   const payment = price - discount;
//   console.log(payment);
// } else if (age >= 50) {
//   //25% discount
//   const discount = price * 25 / 100;
//   console.log(discount);
//   const payAmount = price - discount
//   console.log(payAmount)
// } else {
//   console.log(price)
// }

//Nested condition:
// 7.
const money = 0;
if (money > 300) {
    console.log('bro you are rich!!!');
} else {
    if (money > 100) {
        console.log('tui gorib o na borolok o na');
    } else {
        if (money >= 0) {
            console.log('dosto kola kha. calcium bara');
        } else {
            console.log('tui amar bondhu na.');
        }
    }
}


