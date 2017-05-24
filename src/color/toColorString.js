// @flow

import rgb from './rgb'
import rgba from './rgba'
import hsl from './hsl'
import hsla from './hsla'
import type { RgbColor, RgbaColor, HslColor, HslaColor } from '../types/color'

const isRgb = (color): boolean =>
  typeof color === 'object' &&
  typeof color.red === 'number' &&
  typeof color.green === 'number' &&
  typeof color.blue === 'number' &&
  // $FlowIgnoreNextLine not sure why this complains
  typeof color.alpha !== 'number'

const isRgba = (color): boolean =>
  typeof color === 'object' &&
  typeof color.red === 'number' &&
  typeof color.green === 'number' &&
  typeof color.blue === 'number' &&
  // $FlowIgnoreNextLine not sure why this complains
  typeof color.alpha === 'number'

const isHsl = (color): boolean =>
  typeof color === 'object' &&
  typeof color.hue === 'number' &&
  typeof color.saturation === 'number' &&
  typeof color.lightness === 'number' &&
  // $FlowIgnoreNextLine not sure why this complains
  typeof color.alpha !== 'number'

const isHsla = (color): boolean =>
  typeof color === 'object' &&
  typeof color.hue === 'number' &&
  typeof color.saturation === 'number' &&
  typeof color.lightness === 'number' &&
  // $FlowIgnoreNextLine not sure why this complains
  typeof color.alpha === 'number'

/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */
function toColorString(
  color: RgbColor | RgbaColor | HslColor | HslaColor,
): string {
  if (isRgba(color)) {
    // $FlowIgnoreNextLine not sure why this complains
    return rgba(color)
  } else if (isRgb(color)) {
    // $FlowIgnoreNextLine not sure why this complains
    return rgb(color)
  } else if (isHsla(color)) {
    // $FlowIgnoreNextLine not sure why this complains
    return hsla(color)
  } else if (isHsl(color)) {
    // $FlowIgnoreNextLine not sure why this complains
    return hsl(color)
  }
  throw new Error(
    'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.',
  )
}

export default toColorString
