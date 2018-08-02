// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  let common = arr[0] === arr[1] ? arr[0] : arr[2]
  for (let n of arr) {
    if (n !== common) return n
  }
}


module.exports = findUniq
