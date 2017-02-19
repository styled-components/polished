// @flow
import { isRgb, isRgba, isHsl, isHsla, isHex } from '../internalHelpers/_isValidColor'
import hexToRgb from '../internalHelpers/_hexToRgb'
import hslToRgb from '../internalHelpers/_hslToRgb'

/**
 * Decreases the alpha of a color. Its range is between 0 to 1. The first
 * argument of the transparentize function is the amount by how much the alpha
 * of color should be decreased.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize('#fff', 0.2);
 *   background: transparentize('hsl(0, 0%, 100%)', 0.2),
 *   background: transparentize('rgba(255, 0, 0, .5)', 0.5),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize('#fff', 0.2)};
 *   background: ${transparentize('hsl(0, 0%, 100%)', 0.2)},
 *   background: ${transparentize('rgba(255, 0, 0, .5)', 0.5)},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255, 255, 255, 0.8)";
 *   background: "hsla(0, 0%, 100%, 0.8)";
 *   background: "rgba(255, 0, 0, 0.25)";
 * }
 */

const getColorValuesInBrackets = (color: string) : string => (
  color.slice(color.indexOf('(') + 1, color.indexOf(')'))
)

const getValuesTillLastComma = (color: string) : string => (
  color.slice(0, color.lastIndexOf(','))
)

const transparentizeRgb = (rgb: string, amount: number) : string => (
  `rgba(${getColorValuesInBrackets(rgb)}, ${amount})`
)

function transparentize(amount: number, color: string) {
  if (amount >= 0 && amount <= 1) {
    if (isHex(color)) {
      return transparentizeRgb(`${hexToRgb(color)})`, amount)
    } else if (isRgb(color)) {
      return transparentizeRgb(color, amount)
    } else if (isRgba(color)) {
      const rgb = getValuesTillLastComma(getColorValuesInBrackets(color))
      return transparentizeRgb(rgb, amount)
    } else if (isHsl(color)) {
      const values = getColorValuesInBrackets(color).split(',').map(num => parseInt(num, 10) / 100)
      const rgb = hslToRgb(...values)
      return transparentizeRgb(rgb, amount)
    } else if (isHsla(color)) {
      const hslValues = getValuesTillLastComma(getColorValuesInBrackets(color))
      const values = hslValues.split(',').map(num => parseInt(num, 10) / 100)
      const rgb = hslToRgb(...values)
      return transparentizeRgb(rgb, amount)
    } else {
      throw new Error('Invalid color')
    }
  } else {
    throw new Error('Invalid amount, only values from 0 to 1 are accepted')
  }
}

export default transparentize
