function nextSmaller(n) {

  let revArray = n
    .toString()
    .split('')
    .map(c => parseInt(c))
    .reverse()

  let found = false
  for (let i = 0; i < revArray.length; i++) {
    if (found) break
    for (let j = i+1; j < revArray.length; j++) {
      if (revArray[i] < revArray[j]) {
        let tmp = revArray[j]
        revArray[j] = revArray[i]
        revArray[i] = tmp
        found = true
        break
      }
    }
  }

  if (!found) return -1

  revArray.reverse()

  if (revArray[0] === 0) return -1

  return parseInt(revArray.join(''))
}


module.exports = nextSmaller
