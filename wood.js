/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;

  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

  return totalWood;
}
 
const wood = woodQuantity(0, 0, 4);

console.log('wood needed: ' + wood + 'cft')


/**
 * shirt price --> 500 tk.
 * pant price --> 850 tk.
 * shoe price --> 1200 tk.
 */

function dressQuantity(shirtQuantity, pantQuantity, shoeQuantity) {
  const perShirtPrice = 500;
  const perPantPrice = 850; 
  const perShoePrice = 1200;

  const shirtTotalPrice = shirtQuantity * perShirtPrice;
  const pantTotalPrice = pantQuantity * perPantPrice;
  const ShoeTotalPrice = shoeQuantity * perShoePrice;

  const totalPrice = shirtTotalPrice + pantTotalPrice + ShoeTotalPrice;
  return totalPrice


}
const dress = dressQuantity(0, 1, 0);
console.log('Total Price: ' + dress + ' ' + 'tk.')