// https://www.codewars.com/kata/next-smaller-number-with-the-same-digits

function findSwapIndexes(s) {
  for (let i = s.length-1; i >= 0 ; i--) {
    for (let j = i-1; j >= 0; j--) {
      if (s[i] === '0' && j === 0) continue
      if (parseInt(s[i]) < parseInt(s[j])) {
        return [i, j]
      }
    }
  }

  return [-1, -1]
}

function nextSmaller(n) {
  let s = n.toString().split('')
  const [i, j] = findSwapIndexes(s)

  if (i == -1) return -1

  let tmp = s.splice(i, 1)[0]
  s.splice(j, 0, tmp)

  return parseInt(s.join(''))
}


module.exports = { nextSmaller, findSwapIndexes }
