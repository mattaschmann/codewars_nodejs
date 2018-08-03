// https://www.codewars.com/kata/525caa5c1bf619d28c000335

function isSolved(board) {
  const cols = board.reduce((acc, a) => {
    a.forEach((x, i) => acc[i].push(x))
    return acc
  }, [[],[],[]])

  const diags = [
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ]

  const solutionArray = [...board, ...cols, ...diags]
  const checkArray = (n) => solutionArray.some(a => a.every(x => x === n))

  if (checkArray(1)) return 1
  if (checkArray(2)) return 2
  if (board.reduce((a, b) => [...a, ...b]).includes(0)) return -1

  return 0
}


module.exports = isSolved
