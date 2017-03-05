// @flow

import rgb from './rgb'
import rgba from './rgba'
import hsl from './hsl'
import hsla from './hsla'
import type { RgbColor, RgbaColor, HslColor, HslaColor } from '../types/color'

const isRgb = (color: RgbColor): boolean => (
  typeof color === 'object' &&
  typeof color.red === 'number' &&
  typeof color.green === 'number' &&
  typeof color.blue === 'number' &&
  typeof color.alpha !== 'number'
)

const isRgba = (color: RgbaColor): boolean => (
  typeof color === 'object' &&
  typeof color.red === 'number' &&
  typeof color.green === 'number' &&
  typeof color.blue === 'number' &&
  typeof color.alpha === 'number'
)

const isHsl = (color: HslColor): boolean => (
  typeof color === 'object' &&
  typeof color.hue === 'number' &&
  typeof color.saturation === 'number' &&
  typeof color.lightness === 'number' &&
  typeof color.alpha !== 'number'
)

const isHsla = (color: HslaColor): boolean => (
  typeof color === 'object' &&
  typeof color.hue === 'number' &&
  typeof color.saturation === 'number' &&
  typeof color.lightness === 'number' &&
  typeof color.alpha === 'number'
)

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
function toColorString(color: RgbColor | RgbaColor | HslColor | HslaColor): string {
  if (isRgb(color)) {
    return rgb(color)
  } else if (isRgba(color)) {
    return rgba(color)
  } else if (isHsl(color)) {
    return hsl(color)
  } else if (isHsla(color)) {
    return hsla(color)
  }
  throw new Error('Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.')
}

export default toColorString
