const isPermutation = require('./02-is-permutation');

it('returns true if two strings are permutations of the other', () => {
  expect(isPermutation('leak', 'kale')).toBe(true);
})

it('returns false if two strings are not permutations of the other', () => {
  expect(isPermutation('sail', 'sale')).toBe(false);
})

it('returns false if two strings are of different lengths', () => {
  expect(isPermutation('cat', 'tack')).toBe(false);
})

it('ignores case', () => {
  expect(isPermutation('Brian', 'brain')).toBe(true);
})

it('ignores whitespace', () => {
  expect(isPermutation('dog', '       g o d       ')).toBe(true);
})