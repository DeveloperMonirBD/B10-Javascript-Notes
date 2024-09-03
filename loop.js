const mobile = {
  brand: 'samsung',
  price: '25000',
  color: 'black',
  camera: '12mp'
}

//for of: array ar moddhea salano hoi.
//for in: Object ar moddhea salano hoi.

for (const prop in mobile) {
  // console.log(prop)

  //bracket notation:
  // console.log(mobile[prop])
}

const keys = Object.keys(mobile);
// console.log(keys);

//keys akn arrea hoiea gasea jar karone for of baboher korte pare.
for (const key of keys) {
  console.log(key, ':', mobile[key])
}
