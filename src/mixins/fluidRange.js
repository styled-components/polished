// @flow
import stripUnit from '../helpers/stripUnit'

function between(fromSize: string, toSize: string, unitlessMinScreen: number, unitlessMaxScreen: number) {
  const [unitlessFromSize, fromSizeUnit] = stripUnit(fromSize, true)
  const [unitlessToSize, toSizeUnit] = stripUnit(toSize, true)

  const unit = fromSizeUnit === toSizeUnit ? fromSizeUnit : undefined

  if (typeof unit !== "string") throw new Error('fromSize and toSize must both have the same unit of measure.')

  const slope = (unitlessFromSize - unitlessToSize) / (unitlessMinScreen - unitlessMaxScreen)
  const base = unitlessToSize - (slope * unitlessMaxScreen)
  return `calc(${base}${unit} + ${100 * slope}vw)`
}

function fluidRange(cssProp: Array <Object> | Object, minScreen: string = '320px', maxScreen: string = '1200px') {
  if (!Array.isArray(cssProp) && typeof cssProp !== 'object' || cssProp === null) throw new Error('expects either an array of objects or a single object with the properties prop, fromSize, and toSize.')

  const [unitlessMinScreen, minScreenUnit] = stripUnit(minScreen, true)
  const [unitlessMaxScreen, maxScreenUnit] = stripUnit(maxScreen, true)

  if (
    typeof unitlessMinScreen !== 'number' ||
    typeof unitlessMaxScreen !== 'number' ||
    !minScreenUnit ||
    !maxScreenUnit ||
    minScreenUnit !== maxScreenUnit
    ) throw new Error('minScreen and maxScreen must be provided as stringified numbers with units.')

  if (Array.isArray(cssProp)) {
    const mediaQueries = {}
    const fallbacks = {}
    for (const obj of cssProp) {
      if (!obj.prop || !obj.fromSize || !obj.toSize) throw new Error('expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.')

      fallbacks[obj.prop] = obj.fromSize
      mediaQueries[`@media (min-width: ${minScreen})`] = {
        ...mediaQueries[`@media (min-width: ${minScreen})`],
        [obj.prop]: between(obj.fromSize, obj.toSize, unitlessMinScreen, unitlessMaxScreen)
      }
      mediaQueries[`@media (min-width: ${maxScreen})`] = {
        ...mediaQueries[`@media (min-width: ${maxScreen})`],
        [obj.prop]: obj.toSize
      }
    }

    return {
      ...fallbacks,
      ...mediaQueries
    }

  } else {
    if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) throw new Error('expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.')

    return {
      [cssProp.prop]: cssProp.fromSize,
      [`@media (min-width: ${minScreen})`]: {
        [cssProp.prop]: between(cssProp.fromSize, cssProp.toSize, unitlessMinScreen, unitlessMaxScreen),
      },
      [`@media (min-width: ${maxScreen})`]: {
        [cssProp.prop]: cssProp.toSize,
      }
    }
  }
}

export default fluidRange
