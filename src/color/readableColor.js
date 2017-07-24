// @flow

import parseToRgb from './parseToRgb'
import curry from '../internalHelpers/_curry'

const h = (c: number): number =>
  c / 255 <= 0.03928 ? c / 255 / 12.92 : ((c / 255 + 0.055) / 1.055) ** 2.4

/**
 * Selects black or white for best contrast depending on the luminosity of the given color.
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
  const c = parseToRgb(color)
  return h(c.red) * 0.2126 + h(c.green) * 0.7152 + h(c.blue) * 0.0722 > 0.179
    ? '#000'
    : '#fff'
}

// Don’t inline this variable into export because Rollup will remove the /*#__PURE__*/ comment
const curriedReadableColor = /*#__PURE__*/ curry(readableColor) // eslint-disable-line spaced-comment
export default curriedReadableColor
