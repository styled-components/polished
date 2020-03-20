// @flow
import PolishedError from '../internalHelpers/_errors'

const cssVariableRegex = /--[\S]*/g

/**
 * Fetches the value of a CSS Variable.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'background': cssVar('--background-color'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${cssVar('--background-color')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'background': 'red'
 * }
 */
export default function cssVar(cssVariable: string): string | number {
  if (!cssVariable || !cssVariable.match(cssVariableRegex)) {
    throw new PolishedError(73)
  }

  let variableValue

  /* eslint-disable */
  /* istanbul ignore next */
  if (document.documentElement !== null) {
    variableValue = getComputedStyle(document.documentElement).getPropertyValue(
      cssVariable,
    )
  }
  /* eslint-enable */

  if (variableValue) {
    return variableValue
  } else {
    throw new PolishedError(74)
  }
}
