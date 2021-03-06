const isUnique = require('./01-is-unique');

it("is unique", () => {
  expect(isUnique('superman')).toBe(true)
})

it("is not unique", () => {
  expect(isUnique('alphabet')).toBe(false)
})

it("has too many characters to be unique", () => {
  expect(isUnique('qwertyuiopasdfghjklzxcvbnma')).toBe(false)
})

it("it has shared lowercase and uppercase letters", () => {
  expect(isUnique('Aa')).toBe(false)
})