const persistence = require('./persistent-bugger')

test('it should return 0 for single digit inputs', () => {
  expect(persistence(0)).toBe(0)
  expect(persistence(1)).toBe(0)
  expect(persistence(9)).toBe(0)
})

test('it should return 1 on a very simple problem', () => {
  expect(persistence(10)).toBe(1)
})

test('it should pass more complex tests', () => {
  expect(persistence(39)).toBe(3)
  expect(persistence(4)).toBe(0)
  expect(persistence(25)).toBe(2)
  expect(persistence(999)).toBe(4)
})
