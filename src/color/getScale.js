import mix from './mix'
import normalizeColorStopArray from '../internalHelpers/_normalizeColorStopArray'
import parseTimingFunction from '../internalHelpers/_parseTimingFunction'

/**
 * @param {string[]} colorStops
 */
function getScale(colorStops) {
  const { stops, timings } = normalizeColorStopArray(colorStops)

  if (stops.length === 1) {
    return () => stops[0].color
  }

  function scale(n) {
    const index = stops.findIndex((stop) => stop.position >= n)
    const lower = stops[index - 1]
    const upper = stops[index]
    const timing = timings[index - 1]

    if (index === -1) {
      return stops[stops.length - 1].color
    }

    if (!lower) {
      return upper.color
    }

    const timingFn = parseTimingFunction(timing)

    const range = upper.position - lower.position
    const weight = (n - lower.position) / range

    return mix(timingFn(weight), upper.color, lower.color)
  }

  return scale
}

export default getScale
