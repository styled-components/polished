// @flow
import between from './between'

function fluidRange(
  cssProp: Array<Object> | Object,
  minScreen: string,
  maxScreen: string,
) {
  if (
    (!Array.isArray(cssProp) && typeof cssProp !== 'object')
    || cssProp === null
  ) {
    throw new Error(
      'expects either an array of objects or a single object with the properties prop, fromSize, and toSize.',
    )
  }

  if (Array.isArray(cssProp)) {
    const mediaQueries = {}
    const fallbacks = {}
    for (const obj of cssProp) {
      if (!obj.prop || !obj.fromSize || !obj.toSize) {
        throw new Error(
          'expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.',
        )
      }

      fallbacks[obj.prop] = obj.fromSize
      mediaQueries[`@media (min-width: ${minScreen})`] = {
        ...mediaQueries[`@media (min-width: ${minScreen})`],
        [obj.prop]: between(obj.fromSize, obj.toSize, minScreen, maxScreen),
      }
      mediaQueries[`@media (min-width: ${maxScreen})`] = {
        ...mediaQueries[`@media (min-width: ${maxScreen})`],
        [obj.prop]: obj.toSize,
      }
    }

    return {
      ...fallbacks,
      ...mediaQueries,
    }
  } else {
    if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) {
      throw new Error(
        'expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.',
      )
    }

    return {
      [cssProp.prop]: cssProp.fromSize,
      [`@media (min-width: ${minScreen})`]: {
        [cssProp.prop]: between(
          cssProp.fromSize,
          cssProp.toSize,
          minScreen,
          maxScreen,
        ),
      },
      [`@media (min-width: ${maxScreen})`]: {
        [cssProp.prop]: cssProp.toSize,
      },
    }
  }
}

export default fluidRange
