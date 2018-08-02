const validate = require('./regex-password-validation')

test('is at least 6 chars long', () => {
  expect(validate('0aA1bB')).toBeTruthy()
  expect(validate('0aA1b')).toBeFalsy()
  expect(validate('0aA1bB2')).toBeTruthy()
})

test('is composed of alphanumeric characters', () => {
  expect(validate('abB123')).toBeTruthy()
  expect(validate('/*4}da')).toBeFalsy()
})

test('contains at least one lowercase letter', () => {
  expect(validate('ABB123')).toBeFalsy()
  expect(validate('abB123')).toBeTruthy()
})
