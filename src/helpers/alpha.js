// @flow

import hex2rgba from './hex2rgba'
import isColor from '../internalHelpers/_isColor'

/**
 * Extract alpha from hex color
 * @function
 * @param {string} color
 * @example
 *
 * alpha('#60FFFFFF') -> 0.3764705882352941
 */
function alpha(color: string):number {
  if (isColor(color)) {
    const rgba = hex2rgba(color)
    return rgba[3] / 255
  }
  throw new Error('Please enter valid color')
}

export default alpha
