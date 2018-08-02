// https://www.codewars.com/kata/529adbf7533b761c560004e5

function fibRec(n, map) {
  if (map.has(n)) return map.get(n)

  let cur = fibRec(n-1, map) + fibRec(n-2, map)
  map.set(n, cur)
  return cur
}

function fibonacci(n) {
  let map = new Map([[0,0],[1,1]])

  return fibRec(n, map)
}


module.exports = fibonacci
