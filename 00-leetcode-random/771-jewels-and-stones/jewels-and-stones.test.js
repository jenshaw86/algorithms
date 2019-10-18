const countJewels = require('./jewels-and-stones')

it('counts number of jewels', () => {
  expect(countJewels('aA', 'aAAbbb')).toBe(3);
})

it('counts number of jewels', () => {
  expect(countJewels('z', 'ZZ')).toBe(0);
})