/**
 * array has some duplicate elements
 * []
 */

const names = ['monir', 'ashif', 'sahir', 'monir', 'rafi', 'sahir', 'hasnat', 'nahid', 'hasnat'];

function noDublicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item)
    }
  }
  return unique
  
}

const uniqueArray = noDublicate(names);
console.log(uniqueArray);