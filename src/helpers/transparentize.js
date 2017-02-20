// @flow
import { isRgb, isRgba, isHsl, isHsla, isHex } from '../internalHelpers/_isValidColor'
import hexToRgb from '../internalHelpers/_hexToRgb'
import hslToRgb from '../internalHelpers/_hslToRgb'

/**
 * Decreases the alpha of a color. Its range is between 0 to 1. The first
 * argument of the transparentize function is the amount of alpha
 * that should be decreased from a color and the last argument is
 * a color.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize(0.5, 'rgba(255, 0, 0, .5)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize(0.9, 'rgba(255, 0, 0, 0.1)', 0.9)},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255, 255, 255, 0.1)";
 *   background: "rgba(255, 255, 255, 0.2)";
 *   background: "rgba(255, 0, 0, 0.9)";
 * }
 */

const getColorValuesInBrackets = (color: string) : string => (
  color.slice(color.indexOf('(') + 1, color.indexOf(')'))
)

const getValuesTillLastComma = (color: string) : string => (
  color.slice(0, color.lastIndexOf(','))
)

const getRgba = (rgb: string, amount: number) : string => (
  `rgba(${rgb}, ${amount})`
)

function transparentize(amount: number, color: string) {
  if (amount >= 0 && amount <= 1) {
    if (isHex(color)) {
      const rgb = getColorValuesInBrackets(hexToRgb(color))
      return getRgba(rgb, amount)
    } else if (isRgb(color)) {
      const rgb = getColorValuesInBrackets(color)
      return getRgba(rgb, amount)
    } else if (isRgba(color)) {
      const rgb = getValuesTillLastComma(getColorValuesInBrackets(color))
      return getRgba(rgb, amount)
    } else if (isHsl(color)) {
      const values = (
        getColorValuesInBrackets(color)
          .split(',')
          .map(num => parseInt(num, 10) / 100)
      )
      const rgb = hslToRgb(...values)
      return getRgba(rgb, amount)
    } else if (isHsla(color)) {
      const hslValues = getValuesTillLastComma(getColorValuesInBrackets(color))
      const values = (
        hslValues
          .split(',')
          .map(num => parseInt(num, 10) / 100)
      )
      const rgb = hslToRgb(...values)
      return getRgba(rgb, amount)
    } else {
      throw new Error('Invalid color')
    }
  } else {
    throw new Error('Invalid amount, only values from 0 to 1 are accepted')
  }
}

export default transparentize
