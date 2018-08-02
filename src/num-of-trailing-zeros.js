// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

/**
 * Using the formula from the wolfram alpha page
 */
function zeros(n) {
  const k = Math.log(n) / Math.log(5)

  let sum = 0
  for (let i = 1; i <= k; i++) {
    sum += n / Math.pow(5, i)
  }

  return Math.floor(sum)
}


module.exports = zeros
