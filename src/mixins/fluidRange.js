// @flow
import between from './between'

import type { FluidRangeConfiguration } from '../types/fluidRangeConfiguration'
import type { Styles } from '../types/style'

/**
 * CSS to represent truncated text with an ellipsis.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis('250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis('250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'display': 'inline-flex',
 *   'maxWidth': '250px',
 *   'overflow': 'hidden',
 *   'textOverflow': 'ellipsis',
 *   'whiteSpace': 'nowrap',
 *   'wordWrap': 'normal'
 * }
 */
function fluidRange(
  cssProp: Array<FluidRangeConfiguration> | FluidRangeConfiguration,
  minScreen?: string = '320px',
  maxScreen?: string = '1200px',
): Styles {
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
