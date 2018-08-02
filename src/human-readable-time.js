// https://www.codewars.com/kata/human-readable-time

function humanReadable(seconds) {
  const hours = parseInt(seconds / 3600)
  const minutes = parseInt((seconds % 3600) / 60)
  const secs = seconds  % 60

  const f = (n) => n.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })

  return `${f(hours)}:${f(minutes)}:${f(secs)}`
}


module.exports = humanReadable
