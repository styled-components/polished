// @flow

import rgb from './rgb'
import type { RgbaColor } from '../types/color'

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 * }
 */
function rgba(value: RgbaColor | number, green?: number, blue?: number, alpha?: number): string {
  if (typeof value === 'number' &&
      typeof green === 'number' &&
      typeof blue === 'number' &&
      typeof alpha === 'number') {
    return alpha >= 1 ? rgb(value, green, blue) : `rgba(${value},${green},${blue},${alpha})`
  } else if (typeof value === 'object' && green === undefined && blue === undefined && alpha === undefined) {
    return value.alpha >= 1
      ? rgb(value.red, value.green, value.blue)
      : `rgba(${value.red},${value.green},${value.blue},${value.alpha})`
  }

  throw new Error('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).')
}

export default rgba
