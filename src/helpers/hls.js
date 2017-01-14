// @flow

import reduceHexValue from '../internalHelpers/_reduceHexValue'
import toHex from '../internalHelpers/_numberToHex'

type HlsColor = {
  hue: number,
  lightness: number,
  saturation: number,
}

/**
 * Returns a string value for the color. The returned result is the smalles possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hls(360, 0.75, 0.4),
 *   background: hls({ hue: 360, lightness: 0.75, saturation: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hls(360, 0.75, 0.4)};
 *   background: ${hls({ hue: 360, lightness: 0.75, saturation: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */

function hlsToHex(hue: number, lightness: number, saturation: number): string {
  if (saturation === 0) {
    // achromatic
    return reduceHexValue(`#${toHex(lightness)}${toHex(lightness)}${toHex(lightness)}`)
  }

  // formular from https://en.wikipedia.org/wiki/HSL_and_HSV
  const huePrime = hue / 60
  const chroma = (1 - Math.abs((2 * lightness) - 1)) * saturation
  const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1))

  let red
  let green
  let blue
  if (huePrime >= 0 && huePrime <= 1) {
    red = chroma
    green = secondComponent
    blue = 0
  } else if (huePrime >= 1 && huePrime <= 2) {
    red = secondComponent
    green = chroma
    blue = 0
  } else if (huePrime >= 2 && huePrime <= 3) {
    red = 0
    green = chroma
    blue = secondComponent
  } else if (huePrime >= 3 && huePrime <= 4) {
    red = 0
    green = secondComponent
    blue = chroma
  } else if (huePrime >= 4 && huePrime <= 5) {
    red = secondComponent
    green = 0
    blue = chroma
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma
    green = 0
    blue = secondComponent
  }

  const lightnessModification = lightness - (chroma / 2)
  const addLightAndConvert = (color) => toHex(Math.round((color + lightnessModification) * 255))
  return reduceHexValue(`#${addLightAndConvert(red)}${addLightAndConvert(green)}${addLightAndConvert(blue)}`)
}

function hls(value: HlsColor | number, lightness?: number, saturation?: number): string {
  if (typeof value === 'number' && typeof lightness === 'number' && typeof saturation === 'number') {
    return hlsToHex(value, lightness, saturation)
  } else if (typeof value === 'object' && lightness === undefined && saturation === undefined) {
    return hlsToHex(value.hue, value.lightness, value.saturation)
  }

  throw new Error('Passed invalid arguments to hls, please pass multiple numbers e.g. hls(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, lightness: 0.75, saturation: 0.4 }).')
}

export default hls
