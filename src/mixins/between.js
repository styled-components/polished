// @flow
function getValueAndUnit(value: string): [number | string, string | void] {
  const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
  if (typeof value !== 'string') return [value, '']
  const matchedValue = value.match(cssRegex)
  if (matchedValue) return [parseFloat(value), matchedValue[2]]
  return [value, undefined]
}

function between(
  fromSize: string,
  toSize: string,
  minScreen?: string = '320px',
  maxScreen?: string = '1200px',
): string {
  const [unitlessFromSize, fromSizeUnit] = getValueAndUnit(fromSize)
  const [unitlessToSize, toSizeUnit] = getValueAndUnit(toSize)
  const [unitlessMinScreen, minScreenUnit] = getValueAndUnit(minScreen)
  const [unitlessMaxScreen, maxScreenUnit] = getValueAndUnit(maxScreen)

  if (
    typeof unitlessMinScreen !== 'number'
    || typeof unitlessMaxScreen !== 'number'
    || !minScreenUnit
    || !maxScreenUnit
    || minScreenUnit !== maxScreenUnit
  ) {
    throw new Error(
      'minScreen and maxScreen must be provided as stringified numbers with the same units.',
    )
  }

  if (
    typeof unitlessFromSize !== 'number'
    || typeof unitlessToSize !== 'number'
    || !fromSizeUnit
    || !toSizeUnit
    || fromSizeUnit !== toSizeUnit
  ) {
    throw new Error(
      'fromSize and toSize must be provided as stringified numbers with the same units.',
    )
  }

  const slope = (unitlessFromSize - unitlessToSize)
    / (unitlessMinScreen - unitlessMaxScreen)
  const base = unitlessToSize - slope * unitlessMaxScreen
  return `calc(${base}${fromSizeUnit} + ${100 * slope}vw)`
}

export default between
