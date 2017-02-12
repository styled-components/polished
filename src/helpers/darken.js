// @flow

import parseColorString from '../internalHelpers/_parseColorString'
import rgbToHsl from '../internalHelpers/_rgbToHsl'
import hslToHex from '../internalHelpers/_hslToHex'
import hslToRgb from '../internalHelpers/_hslToRgb'

/**
 * Darken
 */
function darken(amount: number, color: string): string {
  // parse color string to hsl
  const hslColor = rgbToHsl(parseColorString(color))
  const value = {
    ...hslColor,
    lightness: Math.max(0, Math.min(1, hslColor.lightness - amount)),
  }
  return value.alpha >= 1 || value.alpha === undefined
    ? hslToHex(value.hue, value.saturation, value.lightness)
    : `rgba(${hslToRgb(value.hue, value.saturation, value.lightness)},${value.alpha})`
}

export default darken
