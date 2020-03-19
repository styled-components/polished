// @flow
import PolishedError from '../internalHelpers/_errors'

const cssVariableRegex = /--[\S]*/g

/**
 * Fetches the value of a CSS Variable.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px'),
 *   '--unit': stripUnit('100px')[1],
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')};
 *   --unit: ${stripUnit('100px')[1]};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100,
 *   '--unit': 'px',
 * }
 */
export default function cssVar(cssVariable: string): any {
  if (!cssVariable || !cssVariable.match(cssVariableRegex)) {
    throw new PolishedError(73)
  }
  // eslint-disable-next-line no-undef
  const variableValue = getComputedStyle(
    // eslint-disable-next-line no-undef
    document.documentElement,
  ).getPropertyValue(cssVariable)

  if (variableValue) {
    return variableValue
  } else {
    throw new PolishedError(74)
  }
}
