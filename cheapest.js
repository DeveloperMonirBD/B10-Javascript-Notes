let mobiles = [
  {name: 'Samsung', price: 60000, camera: '120mp', color: 'gray'},
  {name: 'Xoami', price: 18000, camera: '48mp', color: 'green'},
  {name: 'Oppo', price: 30000, camera: '24mp', color: 'lime'},
  {name: 'Iphone', price: 100000, camera: '12mp', color: 'green'},
  {name: 'Walton', price: 31000, camera: '48mp', color: 'black'},
  {name: 'HTC', price: 27000, camera: '24mp', color: 'white'}
]


// chepest Phone:-
function getCheapestPhone(phones) {
  let min = phones[0];
  for(const phone of phones) {
    if (phone.price < min.price) {
      min = phone
    }
  }
  return min
}

const cheap = getCheapestPhone(mobiles);
console.log('Cheapest Phone is: ', cheap);



// heighest phone:-
function getHeighestPhone(phones) {
    let max = phones[0];
    for (const phone of phones) {
        if (phone.price > max.price) {
            max = phone;
        }
    }
    return max;
}

const maxPrice = getHeighestPhone(mobiles);
console.log('Heighest Phone is : ', maxPrice);