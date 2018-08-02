const fibonacci = require('./memoized-fibonacci')

test('it returns correct results for the inital values', () => {
  expect(fibonacci(0)).toBe(0)
  expect(fibonacci(1)).toBe(1)
})

test('it returns correct results for small values', () => {
  expect(fibonacci(2)).toBe(1)
  expect(fibonacci(5)).toBe(5)
})

test('it returns quickly for large values', () => {
  expect(fibonacci(70)).toBe(190392490709135)
  expect(fibonacci(60)).toBe(1548008755920)
  expect(fibonacci(50)).toBe(12586269025)
})
