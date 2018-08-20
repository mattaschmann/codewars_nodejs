// https://www.codewars.com/kata/next-smaller-number-with-the-same-digits

// sort function that puts the next smallest number at index 0, then sorts the rest descending
function weirdSort(arr) {
  const next = Math.max(...arr.filter(x => x < arr[0]))

  let swapIndex = 0
  if (next >= 0) {
    swapIndex = arr.findIndex(x => x === next)
  }

  const tmp = arr.splice(swapIndex, 1)[0]
  arr.sort((a, b) => b-a)
  arr.unshift(tmp)

  return arr
}

function nextSmaller(n) {
  let nArr = n
    .toString()
    .split('')
    .map(c => parseInt(c))

  for (let i = nArr.length-2; i >= 0; i--) {
    let test = [...nArr.slice(0, i), ...weirdSort(nArr.slice(i))]

    if (test[0] === 0) return -1

    test = parseInt(test.join(''))

    if (test < n) return test
  }

  return -1
}


module.exports = { nextSmaller, weirdSort }
