const timingFunctionRegex = /linear|cubic-bezier|ease/i
// accepted color stops are in the form of <color> [, <position>?].
// note CSS supports more than this syntax but for simplicity, this lib does not
// support multi-position color stops
const colorStopRegex = /^(\S+)\s?(?:([\d.\-+]+)%?)?$/i

/**
 * This function takes in an array of string to represent color stops with
 * timing functions
 */
function normalizeColorStopArray(colorStops) {
  if (!colorStops.length) {
    // TODO: use polished error
    throw new Error('must have at least one color')
  }

  const { timings, stops } = colorStops.reduce(
    (acc, current, index) => {
      // if is timing function
      if (timingFunctionRegex.test(current)) {
        acc.timings.push(current)
        return acc
      }

      const previous = colorStops[index - 1]

      // ensure that there is a timing entry for each pair of color stops.
      // if one wasn't provided, default to linear
      const previousWasNotTimingFunction = previous && !timingFunctionRegex.test(previous)
      if (previousWasNotTimingFunction) {
        acc.timings.push('linear')
      }

      const match = colorStopRegex.exec(current.trim())
      if (!match) {
        // TODO: use polished error
        throw new Error('unsupported color stop')
      }

      const [color, position] = Array.from(match).slice(1)

      acc.stops.push({
        color,
        position: position && parseFloat(position) / 100,
      })

      return acc
    },
    { timings: [], stops: [] },
  )

  if (timings.length !== stops.length - 1) {
    throw new Error('invalid array')
  }

  const first = stops[0]
  const last = stops[stops.length - 1]

  if (!last.position) {
    last.position = 1
  }

  if (!first.position) {
    first.position = 0
  }

  // This is finding the stops with no position and populating them.
  // It does this by finding a stop with an unpopulated position then iterating
  // until it finds a stop with a defined position. Once those are found, it
  // evenly distributes the positions untill all the undefined positions are
  // defined.
  //
  // TODO: there may be a more elegant way to do this
  let i = 0
  while (i < stops.length) {
    const current = stops[i]

    if (typeof current.position !== 'number') {
      let j = i + 1
      let end = stops[j]
      do {
        end = stops[j]
        j += 1
      } while (typeof end.position !== 'number')

      const startIndex = i - 1
      const endIndex = j - 1
      const start = stops[startIndex]

      const range = end.position - start.position
      for (let k = i; k < j; k += 1) {
        stops[k].position = start.position + ((k - i + 1) / (endIndex - startIndex)) * range
      }
    }

    i += 1
  }

  return { timings, stops }
}

export default normalizeColorStopArray
