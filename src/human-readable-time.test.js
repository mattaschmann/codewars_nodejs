const humanReadable = require('./human-readable-time')

test('it returns 0 time for 0 input', () => {
  expect(humanReadable(0)).toBe('00:00:00')
})

test('it returns the expected time for various inputs', () => {
  expect(humanReadable(5)).toBe('00:00:05')
  expect(humanReadable(60)).toBe('00:01:00')
  expect(humanReadable(86399)).toBe('23:59:59')
  expect(humanReadable(359999)).toBe('99:59:59')
})
