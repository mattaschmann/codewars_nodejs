// https://www.codewars.com/kata/57feb00f08d102352400026e

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789'

// Recreate the rotor array to sum up the number and its predecessor
function sumRoter(rotor) {
  return rotor.reduce((acc, n) => {
    acc.push(acc.length ? n + acc[acc.length-1] : n)
    return acc
  }, [])
}

// Increment each character, cycle if needed
function incrementLine(line, sumRotor) {
  return line
    .split('')
    .map((c, i) => {
      const newIndex = (ALPHABET.indexOf(c) + sumRotor[i]) % ALPHABET.length
      return ALPHABET[newIndex]
    })
    .join('')
}

function flapDisplay (lines, rotors) {
  return lines
  // Map lines to rotors
    .map((line, i) => [line, sumRoter(rotors[i])])
  // Increment each character, cycling
    .reduce((acc, [line, sumRoter]) => {
      acc.push(incrementLine(line, sumRoter))
      return acc
    }, [])
}


module.exports = { incrementLine, flapDisplay, sumRoter }
