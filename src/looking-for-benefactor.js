// https://www.codewars.com/kata/569b5cec755dd3534d00000f

function newAvg(arr, newavg) {
  const sum = arr.reduce((acc, n) => acc + n, 0)

  const x = newavg * (arr.length + 1) - sum
  if (x <= 0) throw new Error('Will be less than 1')

  return Math.ceil(x)
}


module.exports = newAvg
