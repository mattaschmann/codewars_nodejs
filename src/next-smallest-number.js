// https://www.codewars.com/kata/next-smaller-number-with-the-same-digits

function nextSmaller(n) {
  const initial = n
    .toString()
    .split('')
    .sort()

  while (n > 0) {
    n--

    const s = n
      .toString()
      .split('')
      .sort()

    if (s.length < initial.length) return -1

    if (s.join('') == initial.join('')) return n
  }

  return -1
}


module.exports = { nextSmaller }
