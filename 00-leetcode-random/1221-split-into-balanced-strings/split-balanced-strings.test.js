const splitBalancedStr = require('./split-balanced-strings')

it('counts the number of balanced strings', () => {
  expect(splitBalancedStr('RLRRLLRLRL')).toBe(4);
})

it('counts the number of balanced strings', () => {
  expect(splitBalancedStr('RLLLLRRRLR')).toBe(3);
})

it('counts the number of balanced strings', () => {
  expect(splitBalancedStr('LLLLRRRR')).toBe(1);
})

it('returns zero if input length is odd', () => {
  expect(splitBalancedStr('LLLLRRR')).toBe(0);
})

it('returns zero if input is empty string', () => {
  expect(splitBalancedStr('')).toBe(0);
})