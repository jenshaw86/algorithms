const isUnique = require('./01-is-unique');

it("is unique", () => {
  expect(isUnique('superman')).toBe(true)
})

it("is not unique", () => {
  expect(isUnique('alphabet')).toBe(false)
})