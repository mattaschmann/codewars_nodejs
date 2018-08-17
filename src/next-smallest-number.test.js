const { nextSmaller } = require('./next-smallest-number')


test('it returns correctly for a very a basic error case', () => {
  expect(nextSmaller(1)).toEqual(-1)
})

test('it  returns correctly for a more advanced error case', () => {
  expect(nextSmaller(11)).toEqual(-1)
})

test('it  returns correctly for the leading 0 error case', () => {
  expect(nextSmaller(10)).toEqual(-1)
})

test('it returns correctly for a base case', () => {
  expect(nextSmaller(21)).toEqual(12)
})

test('more tricky cases', () => {
  expect(nextSmaller(201)).toEqual(120)
  expect(nextSmaller(414)).toEqual(144)
})

test('problem numbers', () => {
  expect(nextSmaller(907)).toEqual(790)
  expect(nextSmaller(315)).toEqual(153)
  expect(nextSmaller(531)).toEqual(513)
})
