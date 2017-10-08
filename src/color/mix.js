// @flow

import rgba from './rgba'
import parseToRgb from './parseToRgb'
import curry from '../internalHelpers/_curry'

/**
 * Mixes two colors together by calculating the average of each of the RGB components.
 *
 * By default the weight is 0.5 meaning that half of the first color and half the second
 * color should be used. Optionally the weight can be modified by providing a number
 * as the first argument. 0.25 means that a quarter of the first color and three quarters
 * of the second color should be used.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix(0.5, 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix(0.5, 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */
function mix(weight?: number = 0.5, color: string, otherColor: string): string {
  const parsedColor1 = parseToRgb(color)
  const color1 = {
    ...parsedColor1,
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1,
  }

  const parsedColor2 = parseToRgb(otherColor)
  const color2 = {
    ...parsedColor2,
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1,
  }

  // The formular is copied from the original Sass implementation:
  // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method
  const alphaDelta = color1.alpha - color2.alpha
  const x = weight * 2 - 1
  const y = x * alphaDelta === -1 ? x : x + alphaDelta
  const z = 1 + x * alphaDelta
  const weight1 = (y / z + 1) / 2.0
  const weight2 = 1 - weight1

  const mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha + (color2.alpha - color1.alpha) * (weight / 1.0),
  }

  return rgba(mixedColor)
}

const curriedMix = curry(mix)
export default curriedMix
