const getPINs = require('./the-observed-pin')

test('it returns correct for a single char string', () => {
  expect(getPINs('0')).toEqual(['0', '8'])
  expect(getPINs('1')).toEqual(['1', '2', '4'])
})

test('it returns correct for a double char string', () => {
  expect(getPINs('00').sort()).toEqual(['00', '08', '80', '88'].sort())
})
