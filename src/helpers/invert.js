// @flow

import parseColorString from '../internalHelpers/_parseColorString'
import rgb from './rgb'
import rgba from './rgba'

/**
 * Returns the inverted color.
 */
function invert(color: string): string {
  // parse color string to hsl
  const value = parseColorString(color)
  return value.alpha === undefined || value.alpha >= 1
    ? rgb(255 - value.red, 255 - value.green, 255 - value.blue)
    : rgba(255 - value.red, 255 - value.green, 255 - value.blue, value.alpha)
}

export default invert
