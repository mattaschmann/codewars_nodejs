const zeros = require('./num-of-trailing-zeros')

test('it should have the correct number of trailing zeros for the input', () => {
  expect(zeros(6)).toBe(1)
  expect(zeros(12)).toBe(2)
})
