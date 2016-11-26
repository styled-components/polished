/** @module Helpers */

import Color from '../models/Color'

/**
 * Creates a Color from hue, saturation, lightness and alpha values.
 * @static
 * @param {Number} hue - The color hue. A value between 0 and 360 degrees
 * @param {Number} saturation - The color saturation. A value between 0 and 100 percent
 * @param {Number} lightness - The color lightness. A value between 0 and 100 percent
 * @param {Number} alpha - The color alpha. A value between 0.0 and 1.0
 * @return {Models.Color} The Color that represents the given values
 * @example
 * // Styles as object usage
 * PENDING...
 *
 * // styled-components usage
 * PENDING...
 *
 * // CSS in JS Output
 * PENDING...
 */

export function hsla(hue, saturation, lightness, alpha) {
  return new Color({
    space: 'hsl',
    values: [hue, saturation, lightness],
    alpha,
  })
}

export default hsla
