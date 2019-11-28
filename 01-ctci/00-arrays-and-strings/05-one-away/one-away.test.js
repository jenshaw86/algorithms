const oneAway = require('./one-away');

it('returns true if the strings are identical', () => {
  expect(oneAway('pale','pale')).toBeTruthy();
})

it('returns true if only one letter is removed', () => {
  expect(oneAway('pale','ple')).toBeTruthy();
})

it('returns true if only one letter is removed from the middle of the word', () => {
  expect(oneAway('slice', 'lice')).toBeTruthy();
})

it('returns true if only one letter is added to the end of a word', () => {
  expect(oneAway('pale','pales')).toBeTruthy();
})

it('returns true if only one letter is added to the middle of a word', () => {
  expect(oneAway('pay','pray')).toBeTruthy();
})

it('returns true if only one letter is changed', () => {
  expect(oneAway('pale','bale')).toBeTruthy();
})

it('returns false if more than one letter is changed', () => {
  expect(oneAway('pale', 'bake')).toBeFalsy();
})

it('returns false if the length of the words differ by more than one character', () => {
  expect(oneAway('ghost', 'ghostbusters')).toBeFalsy();
})

