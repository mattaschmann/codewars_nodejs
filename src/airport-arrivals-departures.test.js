const { incrementLine, flapDisplay, sumRoter } = require('./airport-arrivals-departures')

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

test('sumRoters works as expected', () => {
  expect(sumRoter([1])).toEqual([1])
  expect(sumRoter([1,2])).toEqual([1,3])
  expect(sumRoter([1,2,3,4])).toEqual([1,3,6,10])
})

test('incrementLine works as expected', () => {
  expect(incrementLine('A', [1])).toEqual('B')
  expect(incrementLine('ABC', [1, 2, 3])).toEqual('BDF')
})
