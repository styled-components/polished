// @flow

import reduceHexValue from './_reduceHexValue'
import toHex from './_numberToHex'

function addLightnessAndConvert(color: number, lightnessModification: number): string {
  return toHex(Math.round((color + lightnessModification) * 255))
}

function hslToHex(hue: number, saturation: number, lightness: number): string {
  if (saturation === 0) {
    // achromatic
    const colorComponent = lightness * 255
    return reduceHexValue(`#${toHex(colorComponent)}${toHex(colorComponent)}${toHex(colorComponent)}`)
  }

  // formular from https://en.wikipedia.org/wiki/HSL_and_HSV
  const huePrime = (hue % 360) / 60
  const chroma = (1 - Math.abs((2 * lightness) - 1)) * saturation
  const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1))

  let red = 0
  let green = 0
  let blue = 0

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma
    green = secondComponent
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent
    green = chroma
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma
    blue = secondComponent
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent
    blue = chroma
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent
    blue = chroma
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma
    blue = secondComponent
  }

  const lightnessModification = lightness - (chroma / 2)
  return reduceHexValue(`#${addLightnessAndConvert(red, lightnessModification)}${addLightnessAndConvert(green, lightnessModification)}${addLightnessAndConvert(blue, lightnessModification)}`)
}

export default hslToHex
