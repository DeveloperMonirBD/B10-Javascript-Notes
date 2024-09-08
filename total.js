const products = [
  {name: 'pant', price: 800},
  {name: 'shirt', price: 650},
  {name: 'belt', price: 450},
  {name: 'shoe', price: 1500},
]

function getShoppingTotal(products) {
  let total = 0;
  
  for (product of products) {
    total = total + product.price;
  }
  return total

}

const total = getShoppingTotal(products);
console.log('Total : ' + total + 'tk.')