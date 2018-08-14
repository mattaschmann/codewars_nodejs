// https://www.codewars.com/kata/5263c6999e0f40dee200059d

const COMBINATIONS = new Map([
  ['0', ['0', '8']],
  ['1', ['1', '2', '4']],
  ['2', ['1', '2', '3', '5']],
  ['3', ['2', '3', '6']],
  ['4', ['1', '4', '5', '7']],
  ['5', ['2', '4', '5', '6', '8']],
  ['6', ['3', '5', '6', '9']],
  ['7', ['4', '7', '8']],
  ['8', ['0', '5', '7', '8', '9']],
  ['9', ['6', '8', '9']],
])

function getPINs(observed) {
  if (observed.length === 1) return COMBINATIONS.get(observed)

  let recArray = getPINs(observed.substring(1))

  return COMBINATIONS.get(observed[0])
    .reduce((acc, c) => {
      let cur = recArray.map(s => c + s)
      return [...cur, ...acc]
    }, [])
}


module.exports = getPINs
