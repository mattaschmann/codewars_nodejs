const ROTOR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789'

function flapDisplay (lines, rotors) {
  return lines
    // Map lines to rotors
    .map((line, i) => {
      // Recreate the rotor array to sum up the number and its predecessor
      let rotor = rotors[i].reduce((acc, n) => {
        acc.push(acc.length ? n + acc[acc.length-1] : n)
        return acc
      }, [])
      return [line, rotor]
    })
    // Increment each character, cycling
    .reduce((acc, [line, rotor]) => {
      acc.push(
        Array.prototype.map.call(line, (c, i) => {
          let newIndex = (ROTOR.indexOf(c) + rotor[i]) % ROTOR.length
          return ROTOR[newIndex]
        }).join('')
      )

      return acc
    }, [])
}


module.exports = flapDisplay
