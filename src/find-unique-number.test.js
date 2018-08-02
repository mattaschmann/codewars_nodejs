const findUniq = require('./find-unique-number')

test('it returns correct results for a small input', () => {
  expect(findUniq([0, 1, 0])).toBe(1)
  expect(findUniq([1, 0, 0])).toBe(1)
  expect(findUniq([0, 0, 1])).toBe(1)
  expect(findUniq([1, 2, 1])).toBe(2)
  expect(findUniq([ 1, 1, 1, 2, 1, 1 ])).toBe(2)
  expect(findUniq([ 3, 10, 3, 3, 3, 3 ])).toBe(10)
})
