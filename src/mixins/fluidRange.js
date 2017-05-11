// @flow
import stripUnit from '../helpers/stripUnit'
import between from '../helpers/between'

function fluidRange(cssProp: Array <Object> | Object, minScreen: string = '320px', maxScreen: string = '1200px') {
  if (!cssProp) throw new Error('expects either an array of objects or a single object with the properties prop, fromSize, and toSize')
  if (typeof minScreen !== 'string' || typeof maxScreen !== 'string') throw new Error('minScreen and maxScreen must be provided as stringified numbers')

  const styles = {
    [`@media (min-width: ${minScreen})`]: {},
    [`@media (min-width: ${maxScreen})`]: {},
  }

  if (Array.isArray(cssProp)) {
    for (const obj of cssProp) {
      styles[obj.prop] = obj.fromSize
      styles[`@media (min-width: ${minScreen})`][obj.prop] = between(obj.fromSize, obj.toSize, minScreen, maxScreen)
      styles[`@media (min-width: ${maxScreen})`][obj.prop] = obj.toSize
    }
  } else {
    if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) throw new Error('expects either an array of objects or a single object with the properties prop, fromSize, and toSize')

    styles[cssProp.prop] = cssProp.fromSize
    styles[`@media (min-width: ${minScreen})`][cssProp.prop] = between(cssProp.fromSize, cssProp.toSize, minScreen, maxScreen)
    styles[`@media (min-width: ${maxScreen})`][cssProp.prop] = cssProp.toSize
  }

  return styles
}

export default fluidRange
