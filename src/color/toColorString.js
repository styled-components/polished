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
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString(),
 *   background: toColorString(),
 *   background: toColorString(),
 *   background: toColorString(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString()};
 *   background: ${toColorString()};
 *   background: ${toColorString()};
 *   background: ${toColorString()};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "";
 *   background: "";
 *   background: "";
 *   background: "";
 * }
 */
function toColorString(color: RgbColor | RgbaColor): string {
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
