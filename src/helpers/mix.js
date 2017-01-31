// @flow

import endsWith from '../internalHelpers/_endsWith'
import checkFix from '../internalHelpers/_checkFix'
import Color from '../internalHelpers/_Color'
import stripUnit from '../helpers/stripUnit'

type mixColor = {
  color1: string,
  color2: string,
  weight: number,
}

/**
 * Mixes two colors together. Specifically, takes the average of each of the
 * RGB components, optionally weighted by the given percentage. The opacity
 * of the colors is also considered when weighting the components.
 *
 * The weight specifies the amount of the first color that should be included
 * in the returned color. The default, `50%`, means that half the first color
 * and half the second color should be used. `25%` means that a quarter of
 * the first color and three quarters of the second color should be used.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...color: mix('#f00', '#00f')
 *   ...color: mix('#f00', '#00f', 25)
 *   ...color: mix('#f00', '#00f', '25%')
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${mix('#f00', '#00f')};
 *   color: ${mix('#f00', '#00f', 25)};
 *   color: ${mix('#f00', '#00f', '25%')};
 *`
 *
 * // CSS in JS Output
 *
 * div {
 *   color: "#7f007f";
 *   color: "#3f00bf";
 *   color: "#3f00bf";
 * }
 */
function mix(color1 : mixColor | string, color2: string, weight: string|number = 50):string {
  const newColor1 = checkFix(color1)
  const newColor2 = checkFix(color2)
  let newWeight = weight
  if (typeof weight === 'string') {
    if (endsWith(weight, '%')) {
      newWeight = stripUnit(weight)// newWeight.substr(-1)
    }
  }
  if (newWeight > 100) newWeight = 100

  const c1 = new Color(newColor1)
  const c2 = new Color(newColor2)
  const newColor = new Color('mix', [c1, c2, newWeight])
  return newColor.hex()
}

export default mix
