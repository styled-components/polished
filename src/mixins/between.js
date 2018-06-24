// @flow
import stripUnit from '../helpers/stripUnit'

function between(
  fromSize: string,
  toSize: string,
  minScreen: number | string = 320,
  maxScreen: number = 1200,
) {
  const [unitlessFromSize, fromSizeUnit] = stripUnit(fromSize, true)
  const [unitlessToSize, toSizeUnit] = stripUnit(toSize, true)
  const [unitlessMinScreen, minScreenUnit] = stripUnit(minScreen, true)
  const [unitlessMaxScreen, maxScreenUnit] = stripUnit(maxScreen, true)

  if (
    typeof unitlessMinScreen !== 'number' ||
    typeof unitlessMaxScreen !== 'number' ||
    !minScreenUnit ||
    !maxScreenUnit ||
    minScreenUnit !== maxScreenUnit
  ) {
    throw new Error('minScreen and maxScreen must be provided as stringified numbers with units.')
  }

  const unit = fromSizeUnit === toSizeUnit ? fromSizeUnit : undefined

  if (typeof unit !== 'string') {
    throw new Error('fromSize and toSize must both have the same unit of measure.')
  }

  const slope =
    (unitlessFromSize - unitlessToSize) /
    (unitlessMinScreen - unitlessMaxScreen)
  const base = unitlessToSize - slope * unitlessMaxScreen
  return `calc(${base}${unit} + ${100 * slope}vw)`
}

export default between
