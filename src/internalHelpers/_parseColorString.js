// @flow

import type { RgbColor, RgbaColor } from '../types/color'

const hexRegex = /^#[a-fA-F0-9]{6}$/
const reducedHexRegex = /^#[a-fA-F0-9]{3}$/
const rgbaRegex = /^rgba\((\d+),(\d+),(\d+),([-+]?[0-9]*[.]?[0-9]+)\)$/

function parseColorString(value: string): RgbColor | RgbaColor {
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
  const matched = rgbaRegex.exec(value)
  if (matched) {
    return {
      red: parseInt(`${matched[1]}`, 10),
      green: parseInt(`${matched[2]}`, 10),
      blue: parseInt(`${matched[3]}`, 10),
      alpha: parseFloat(`${matched[4]}`, 10),
    }
  }

  throw new Error('Couldn\'t parse the color string. Please provide the color in hex or rgba notation as a string.')
}

export default parseColorString
