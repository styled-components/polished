// @flow

/**
 * Returns a string value for the color. The returned result is the smalles possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb('255, 205, 100'),
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb('255, 205, 100')};
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: TODO
 * }
 */

type RgbColor = {
  red: number,
  green: number,
  blue: number,
}

function rgb(value: string | RgbColor | number, green?: number, blue?: number): string {
  return '#FFF'
}

export default rgb
