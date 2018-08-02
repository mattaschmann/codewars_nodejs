// https://www.codewars.com/kata/human-readable-time

function humanReadable(seconds) {
  const hours = parseInt(seconds / 3600)
  const minutes = parseInt((seconds % 3600) / 60)
  const secs = seconds  % 60

  const f = (n) => n < 10 ? `0${n}` : n

  return `${f(hours)}:${f(minutes)}:${f(secs)}`
}


module.exports = humanReadable
