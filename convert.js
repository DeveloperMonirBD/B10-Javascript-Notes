// 12 inch 1 feet.

// function inchToFeet(inch) {
//   const feet = inch / 12
//   return feet;
// }

// const monirHeight = inchToFeet(75);
// console.log(monirHeight)


// function Inch to feet: 75'
function inchToFeet2(inch) {
  const feetFraction = inch / 12
  const feetNumber = parseInt(feetFraction);
  const inchReaiming = inch % 12;
  const result = feetNumber + ' ft ' + inchReaiming + ' inch.'
  return result;
}

const monirHeight = inchToFeet2(75);
console.log(monirHeight)


// function miles to kilomitter: 
function mileToKiloneter(miles) {
  const kilo = miles * 1.60934;
  const kilomitter = parseInt(kilo);
  const kiloReaiming = miles % 1.60934;
  const result = kilomitter + ' km. ' + kiloReaiming + " mitter "
    return result;
}

const kilomitter = mileToKiloneter(3.10686);
console.log(kilomitter);
