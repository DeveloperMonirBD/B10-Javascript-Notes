const products = [
    { name: 'pant', price: 800, quantity: 2 },
    { name: 'shirt', price: 650, quantity: 3 },
    { name: 'belt', price: 450, quantity: 4 },
    { name: 'shoe', price: 1500, quantity: 1 }
];

function cartTotal(products) {
  let total = 0;
  for (const product of products) {
    const thisProductCost = product.price * product.quantity
    total = total + thisProductCost;
  }
  return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);