// @flow

import hslToRgb from './_hslToRgb'
import type { RgbColor, RgbaColor } from '../types/color'

const hexRegex = /^#[a-fA-F0-9]{6}$/
const reducedHexRegex = /^#[a-fA-F0-9]{3}$/
const rgbRegex = /^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/
const rgbaRegex = /^rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?([-+]?[0-9]*[.]?[0-9]+)\)$/
const hslRegex = /^hsl\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%\)$/
const hslaRegex = /^hsla\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%, ?([-+]?[0-9]*[.]?[0-9]+)\)$/

function parseColorString(value: string): RgbColor | RgbaColor {
  if (typeof value !== 'string') throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.')
  if (value.match(hexRegex)) {
    return {
      red: parseInt(`${value[1]}${value[2]}`, 16),
      green: parseInt(`${value[3]}${value[4]}`, 16),
      blue: parseInt(`${value[5]}${value[6]}`, 16),
    }
  }
  if (value.match(reducedHexRegex)) {
    return {
      red: parseInt(`${value[1]}${value[1]}`, 16),
      green: parseInt(`${value[2]}${value[2]}`, 16),
      blue: parseInt(`${value[3]}${value[3]}`, 16),
    }
  }
  const rgbMatched = rgbRegex.exec(value)
  if (rgbMatched) {
    return {
      red: parseInt(`${rgbMatched[1]}`, 10),
      green: parseInt(`${rgbMatched[2]}`, 10),
      blue: parseInt(`${rgbMatched[3]}`, 10),
    }
  }
  const rgbaMatched = rgbaRegex.exec(value)
  if (rgbaMatched) {
    return {
      red: parseInt(`${rgbaMatched[1]}`, 10),
      green: parseInt(`${rgbaMatched[2]}`, 10),
      blue: parseInt(`${rgbaMatched[3]}`, 10),
      alpha: parseFloat(`${rgbaMatched[4]}`, 10),
    }
  }
  const hslMatched = hslRegex.exec(value)
  if (hslMatched) {
    const hue = parseInt(`${hslMatched[1]}`, 10)
    const saturation = parseInt(`${hslMatched[2]}`, 10) / 100
    const lightness = parseInt(`${hslMatched[3]}`, 10) / 100
    const rgbColorString = `rgb(${hslToRgb(hue, saturation, lightness)})`
    const hslRgbMatched = rgbRegex.exec(rgbColorString)
    return {
      red: parseInt(`${hslRgbMatched[1]}`, 10),
      green: parseInt(`${hslRgbMatched[2]}`, 10),
      blue: parseInt(`${hslRgbMatched[3]}`, 10),
    }
  }
  const hslaMatched = hslaRegex.exec(value)
  if (hslaMatched) {
    const hue = parseInt(`${hslaMatched[1]}`, 10)
    const saturation = parseInt(`${hslaMatched[2]}`, 10) / 100
    const lightness = parseInt(`${hslaMatched[3]}`, 10) / 100
    const rgbColorString = `rgb(${hslToRgb(hue, saturation, lightness)})`
    const hslRgbMatched = rgbRegex.exec(rgbColorString)
    return {
      red: parseInt(`${hslRgbMatched[1]}`, 10),
      green: parseInt(`${hslRgbMatched[2]}`, 10),
      blue: parseInt(`${hslRgbMatched[3]}`, 10),
      alpha: parseFloat(`${hslaMatched[4]}`, 10),
    }
  }
  throw new Error('Couldn\'t parse the color string. Please provide the color in hex, rgb, rgba, hsl or hsla notation as a string.')
}

export default parseColorString
