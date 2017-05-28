// @flow

import hsl from './hsl'
import hsla from './hsla'
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
function hslToColorString(color: HslColor | HslaColor | number): string {
  if (
    typeof color === 'object' &&
    typeof color.hue === 'number' &&
    typeof color.saturation === 'number' &&
    typeof color.lightness === 'number'
  ) {
    // $FlowIgnoreNextLine not sure why this complains
    return (color.alpha && typeof color.alpha === 'number') ? hsla(color) : hsl(color)
  }

  throw new Error('Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.')
}

export default hslToColorString
