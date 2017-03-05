// @flow

import parseToRgb from './parseToRgb'
import rgb from './rgb'
import rgba from './rgba'

/**
 * Inverts the red, green and blue values of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: invert(0.2, '#CCCD64'),
 *   background: invert(0.2, 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${invert(0.2, '#CCCD64')};
 *   background: ${invert(0.2, 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */
function invert(color: string): string {
  // parse color string to hsl
  const value = parseToRgb(color)
  const invertedColor = {
    ...value,
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue,
  }
  return invertedColor.alpha === undefined || invertedColor.alpha >= 1
    ? rgb(invertedColor)
    : rgba(invertedColor)
}

export default invert
