function evenSizedString(str) {
  const size = str.length;
  if (size % 2 === 0) {
    console.log('even size');
    return true;
  } else {
    console.log('odd size');
    return false;
  }
   console.log(str, size)
}
 
// evenSizedString('Dhaka')

function doubleorTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result
  }
}

// console.log(doubleorTriple(5, true))
// console.log(doubleorTriple(5, false))

function numberOfElements(numbers) {
  const len = numbers.length;
  return len;
}

console.log(numberOfElements([12, 354, 53, 65, 67, 98]))
