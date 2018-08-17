// https://www.codewars.com/kata/next-smaller-number-with-the-same-digits

function nextSmaller(n) {
  let sArr = n
    .toString()
    .split('')
    .map(c => parseInt(c))

  let first = (sArr[0])

  while (first > 0) {
    if (!sArr.includes(first)) {
      first--
      continue
    }

    const tmp = sArr.splice(sArr.findIndex(x => x === first), 1)[0]
    sArr.sort((a, b) => b-a)
    sArr.unshift(tmp)

    let num = parseInt(sArr.join(''))

    if (num == n) {
      let rem = nextSmaller(parseInt(n.toString().substring(1)))

      if (rem !== -1) num = parseInt(first.toString() + rem.toString())
    }

    if (num < n) return num

    first--
  }

  return -1
}


module.exports = { nextSmaller }
