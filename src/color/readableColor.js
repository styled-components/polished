// @flow

import parseToRgb from './parseToRgb'
import curry from '../internalHelpers/_curry'

const w3cConversion = (rgbColor: number): number => {
  const colorZeroToOne = rgbColor / 255
  return colorZeroToOne <= 0.03928
    ? colorZeroToOne / 12.92
    : ((colorZeroToOne + 0.055) / 1.055) ** 2.4
}

/**
 * Selects black or white or best contrast depending on the luminosity of the supplied color.
 * Follows W3C specs for readability at https://www.w3.org/TR/WCAG20-TECHS/G18.html
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('papayawhip'),
 *   color: readableColor('rgb(255,0,0)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('papayawhip')};
 *   color: ${readableColor('rgb(255,0,0)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   color: "#fff";
 *   color: "#fff";
 *   color: "#000";
 * }
 */

function readableColor(color: string): string {
  const parsedColor = parseToRgb(color)
  const luminosity =
    w3cConversion(parsedColor.red) * 0.2126 +
    w3cConversion(parsedColor.green) * 0.7152 +
    w3cConversion(parsedColor.blue) * 0.0722
  return luminosity > 0.179 ? '#000' : '#fff'
}

export default curry(readableColor)
