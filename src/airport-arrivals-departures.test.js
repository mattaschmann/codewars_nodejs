const flapDisplay = require('./airport-arrivals-departures')

test('iterates for a simple test case', () => {
  expect(flapDisplay(['A'], [[1]])).toEqual(['B'])
  expect(flapDisplay(['B'], [[1]])).toEqual(['C'])
  expect(flapDisplay(['9'], [[1]])).toEqual(['A'])
})

test('iterates for a word of more than one character', () => {
  expect(flapDisplay(['A9'], [[1,0]])).toEqual(['BA'])
  expect(flapDisplay(['ABC'], [[1,2,3]])).toEqual(['BEI'])
})

test('returns correctly for more than one line', () => {
  expect(flapDisplay(['A9', 'ABC'], [[1,0], [1,2,3]])).toEqual(['BA', 'BEI'])
})
