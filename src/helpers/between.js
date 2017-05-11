// @flow
import stripUnit from './stripUnit'

function between(fromSize: string, toSize: string, minScreen: string = '320px', maxScreen: string = '1200px') {
  const cssRegex =  /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
  const unitlessFromSize = stripUnit(fromSize)
  const unitlessToSize = stripUnit(toSize)

  const fromSizeUnit = fromSize.match(cssRegex)[2]
  const toSizeUnit = toSize.match(cssRegex)[2]

  const unit = fromSizeUnit === toSizeUnit ? fromSizeUnit : undefined

  if (typeof unit !== 'string') throw new Error("fromSize and toSize must both have the same unit of measure")

  if (typeof unitlessFromSize === 'string' || typeof unitlessToSize === 'string') {
    throw new Error('fromSize and toSize must be provided as stringified numbers')
  }

  const unitlessMinScreen = stripUnit(minScreen)
  const unitlessMaxScreen = stripUnit(maxScreen)

  if (typeof unitlessMinScreen === 'string' || typeof unitlessMaxScreen === 'string') {
    throw Error('minScreen and maxScreen must be provided as stringified numbers')
  }

  const slope = (unitlessFromSize - unitlessToSize) / (unitlessMinScreen - unitlessMaxScreen)
  const base = unitlessToSize - (slope * unitlessMaxScreen)
  return `calc(${base}${unit} + ${100 * slope}vw)`
}

export default between
