const linearRegex = /^\s*linear\s*$/i
const easeRegex = /^\s*ease\s*$/i
const easeInRegex = /^\s*ease-in\s*$/i
const easeOutRegex = /^\s*ease-out\s*$/i
const easeInOutRegex = /^\s*ease-in-out\s*$/i
const cubicBezierRegex = /^\s*cubic-bezier\(\s*([\d.-]+),\s*([\d.-]+),\s*([\d.-]+),\s*([\d.-]+)\s*\)/i

function createTimingFn(p0, p1, p2, p3) {
  return (t) => (1 - t) ** 3 * p0
    + 3 * (1 - t) ** 2 * t * p1
    + 3 * (1 - t) * t ** 2 * p2
    + t ** 3 * p3
}

/**
 * Takes in a timing function string and returns
 */
function parseTimingFunction(timingFunction) {
  if (linearRegex.test(timingFunction)) return (x) => x
  if (easeRegex.test(timingFunction)) return createTimingFn(0.25, 0.1, 0.25, 1)
  if (easeInRegex.test(timingFunction)) return createTimingFn(0.42, 0, 1, 1)
  if (easeOutRegex.test(timingFunction)) return createTimingFn(0, 0, 0.58, 1)
  if (easeInOutRegex.test(timingFunction)) return createTimingFn(0.42, 0, 0.58, 1)
  const cubicBezierMatch = cubicBezierRegex.exec(timingFunction)
  if (cubicBezierMatch) {
    const params = Array.from(cubicBezierMatch).slice(1).map(parseFloat)
    return createTimingFn(...params)
  }
  // TODO: use polished error
  throw new Error('no match')
}

export default parseTimingFunction
