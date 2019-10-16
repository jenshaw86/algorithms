const urlify = require('./03-urlify');

it('replaces all spaces in string with %20', () => {
  expect(urlify('Mr John Smith     ', 13)).toBe('Mr%20John%20Smith');
})