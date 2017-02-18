// @flow

import parseColorString from '../internalHelpers/_parseColorString'
import rgba from './rgba'

/**
 * Returns the inverted color.
 */
function invert(color: string): string {
  // parse color string to hsl
  const value = parseColorString(color)
  const invertedColor = {
    ...value,
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue,
  }
  return rgba(invertedColor)
}

export default invert
