const newAvg = require('./looking-for-benefactor')

test('will throw an error if the result would have been less than or equal to 0', () => {
  expect(() => newAvg([10, 10], 2)).toThrow()
})

test('it returns the new avg for a simple function', () => {
  expect(newAvg([2, 2], 2)).toBe(2)
})

test('default tests', () => {
  expect(newAvg([14, 30, 5, 7, 9, 11, 16], 90)).toBe(628)
  expect(newAvg([14, 30, 5, 7, 9, 11, 15], 92)).toBe(645)
  expect(() => newAvg([14, 30, 5, 7, 9, 11, 15], 2)).toThrow()
})
