const { nextSmaller, weirdSort } = require('./next-smallest-number')


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
  expect(nextSmaller(20721)).toEqual(20712)
  expect(nextSmaller(2071)).toEqual(2017)
})

test('weirdSort', () => {
  expect(weirdSort([0])).toEqual([0])
  expect(weirdSort([0, 1])).toEqual([0, 1])
  expect(weirdSort([1, 0, 1])).toEqual([0, 1, 1])
  expect(weirdSort([9, 0, 7])).toEqual([7, 9, 0])
  expect(weirdSort([4, 2, 1, 3])).toEqual([3, 4, 2, 1])
})
