// https://www.codewars.com/kata/54b058ce56f22dc6fe0011df

function cutLogRec(p, n, m) {
  if (!m.has(n)) {
    let cur = m.get(0)
    for (let i = 1; i <= n; i++) {
      let rec = cutLogRec(p, n-i, m)
      let max = Math.max(cur[0], p[i] + rec[0])
      let arr = max === cur[0] ? cur[1] : [i, ...rec[1]]
      cur = [max, arr]
    }
    m.set(n, cur)
  }
  return m.get(n)
}

var cutLog = function(p, n) {
  let solutions = new Map([[0, [0, []]]])

  return cutLogRec(p, n, solutions)
}


/**
 * Don't include
 */
module.exports = cutLog
