// req:1
function multiply(num1, num2) {
 // number validation:
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'please provide a number'
  }

  const mult = num1 * num2;
  return mult;
}

const result = multiply(5, 4);
// console.log(result);


// req:2
function fullName(firstName, lastName) {
  //Name validation:
  if (typeof firstName !== 'string') {
    return 'First name should be a string'
  } else if (typeof lastName !== 'string') {
    return 'Last name should be a string'
  }

  const fullName = firstName + ' ' + lastName;
  return fullName;
}
const name = fullName("Monirul", "Islam");
// console.log(name)

// req:3 
function getPrice(product) {
  //Object Validation:
  // console.log(typeof(product))

  if (typeof product !== 'object') {
    return 'Please provide an Object'
  }

  const price = product.price;
  return price;
}
// const price = getPrice({ name: 'T-Sdirt', price: 500, color: 'blue' })

const price = getPrice(5)
// console.log(price)


// req:4 
function getSecond(numbers) {

  // console.log(Array.isArray(numbers));
  // Array validation:
  if(Array.isArray(numbers) === false) {
    return 'Please provide an array'
  } 

  const second = numbers[1];
  return second;

}

// const second = getSecond([43, 23, 54, 67])
const second = getSecond(23)
console.log(second)
