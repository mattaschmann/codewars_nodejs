// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  let curLen = num.toString().length
  let curNum = num
  let count = 0

  while (curLen > 1) {
    curNum = curNum.toString()
                   .split('')
                   .reduce((acc, c) => Number.parseInt(c) * acc)

    curLen = curNum.toString().length
    count++
  }

  return count
}


// Don't include
module.exports = persistence
