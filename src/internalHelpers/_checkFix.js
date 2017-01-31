// @flow

import rgbToRRGGBB from './_rgbToRRGGBB'
import isColor from './_isColor'

const checkFix = (color) => {
  let newColor = color
  let hasHash = false

  if (!color) throw new Error('Please enter a valid colors')
  if (color[0] === '#') {
    newColor = color.slice(1)
    hasHash = true
  }
  newColor = rgbToRRGGBB(newColor)
  newColor = hasHash ? `#${newColor}` : newColor

  if (!isColor(newColor)) throw new Error('Please enter a valid colors')
  return newColor
}

export default checkFix
