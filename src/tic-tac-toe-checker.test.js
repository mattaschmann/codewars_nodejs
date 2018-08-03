const isSolved = require('./tic-tac-toe-checker')

test('it returns -1 if any zeros are found', () => {
  expect(isSolved([
    [0,0,0],
    [0,2,0],
    [0,1,0]
  ])).toBe(-1)
})

test('it returns 1 if x won in rows', () => {
  expect(isSolved([
    [1,1,1],
    [2,1,0],
    [1,2,0]
  ])).toBe(1)
})

test('it returns 1 if x won in cols', () => {
  expect(isSolved([
    [1,2,1],
    [1,0,0],
    [1,1,2]
  ])).toBe(1)
})

test('it returns 1 if x won in diags', () => {
  expect(isSolved([
    [1,2,1],
    [2,1,0],
    [1,1,2]
  ])).toBe(1)
  expect(isSolved([
    [1,2,1],
    [2,1,0],
    [2,1,1]
  ])).toBe(1)
})

test('it returns 2 if x won in rows', () => {
  expect(isSolved([
    [2,2,2],
    [1,2,0],
    [2,1,1]
  ])).toBe(2)
})

test('it returns 2 if x won in cols', () => {
  expect(isSolved([
    [2,1,2],
    [2,1,0],
    [2,2,1]
  ])).toBe(2)
})

test('it returns 2 if x won in diags', () => {
  expect(isSolved([
    [2,1,2],
    [1,2,0],
    [2,2,1]
  ])).toBe(2)
  expect(isSolved([
    [2,1,2],
    [1,2,0],
    [1,2,2]
  ])).toBe(2)
})
