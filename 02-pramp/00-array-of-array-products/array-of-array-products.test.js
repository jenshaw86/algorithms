const arrayOfArrayProducts = require('./array-of-array-products')

it ('returns an empty array', () => {
  expect(arrayOfArrayProducts([])).toMatchObject([]);
})

it ('returns an empty array', () => {
  expect(arrayOfArrayProducts([3])).toMatchObject([]);
})

it ('switches position of elements', () => {
  expect(arrayOfArrayProducts([4,5])).toMatchObject([5,4]);
})

it ('returns an array of products, each indexed element a product of all numbers in the input array except the number of the same index', () => {
  expect(arrayOfArrayProducts([2,3,4,5])).toMatchObject([60,40,30,24]);
})

it ('returns an array of products, all but one equaling 0', () => {
  expect(arrayOfArrayProducts([0,3,5,7,1,2])).toMatchObject([210,0,0,0,0,0])
}) 