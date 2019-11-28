// Brute Force

// const arrayOfArrayProducts = arr => {
//   let productsContainer = [];
//   if (arr.length < 2) return productsContainer;

//   for (i = 0; i < arr.length; i ++) {
//     let product = 1;
//     for (j = 0; j < arr.length; j++) {
//       if (j !== i) {
//         product *= arr[j];
//       }
//     }
//     productsContainer.push(product);
//   }
//   return productsContainer;
// }

// Optimize
const arrayOfArrayProducts = arr => {
  let productsContainer = [];
  if (arr.length < 2) return productsContainer;

  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    productsContainer[i] = product;
    product *= arr[i];
  }

  product = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    productsContainer[j] *= product;
    product *= arr[j];
  }
  return productsContainer;  
}

module.exports = arrayOfArrayProducts;