// @flow
import hsl from './hsl'
import hsla from './hsla'
import PolishedError from '../internalHelpers/_errors'
import colorObjectType from '../internalHelpers/_colorObjectType'

import type { HslColor, HslaColor } from '../types/color'

/**
 * Converts a HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hslToColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: hslToColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hslToColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${hslToColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */
export default function hslToColorString(color: HslColor | HslaColor): string {
  const colorType = colorObjectType({
    color,
    expectedTypes: ['hsl', 'hsla'],
    typeError: new PolishedError(45),
  })

  if (colorType === 'hsla') {
    return hsla({
      hue: color.hue,
      saturation: color.saturation,
      lightness: color.lightness,
      alpha: color.alpha,
    })
  }

  return hsl({
    hue: color.hue, saturation: color.saturation, lightness: color.lightness,
  })
}
