function nextSmaller(n) {

  let revArray = n
    .toString()
    .split('')
    .map(c => parseInt(c))
    .reverse()

  let swapIndex = revArray
    .findIndex((n, i, arr) => {
      return n > arr[0]
    })

  if (swapIndex === -1) return -1

  let tmp = revArray[swapIndex]
  revArray[swapIndex] = revArray[0]
  revArray[0] = tmp

  revArray.reverse()

  if (revArray[0] === 0) return -1

  return parseInt(revArray.join(''))
}


module.exports = nextSmaller
