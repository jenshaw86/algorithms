const compressString = require('./string-compression')

it ('returns a4', () => {
  expect(compressString('aaaa')).toBe('a4');
})

it('returns b', () => {
  expect(compressString('b')).toBe('b');
})


it('returns empty string', () => {
  expect(compressString('')).toBe('');
})

it('returns a4b1', () => {
  expect(compressString('aaaab')).toBe('a4b1');
})

it('returns a2b1c5a3', () => {
  expect(compressString('aabcccccaaa')).toBe('a2b1c5a3');
})

it('returns abcdefg', () => {
  expect(compressString('abcdefg')).toBe('abcdefg');
})

it('returns abcabc', () => {
  expect(compressString('abcabc')).toBe('abcabc');
})