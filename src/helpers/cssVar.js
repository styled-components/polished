// @flow
import PolishedError from '../internalHelpers/_errors'

const cssVariableRegex = /--[\S]*/g

/**
 * Fetches the value of a passed CSS Variable.
 *
 * Passthrough can be enabled (off by default) for when you are unsure of the input and want non-variable values to be returned instead of an error.
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
export default function cssVar(
  cssVariable: string,
  passThrough?: boolean,
): string | number {
  if (!cssVariable || !cssVariable.match(cssVariableRegex)) {
    if (passThrough) return cssVariable
    throw new PolishedError(73)
  }

  let variableValue

  /* eslint-disable */
  /* istanbul ignore next */
  if (typeof document !== 'undefined' && document.documentElement !== null) {
    variableValue = getComputedStyle(document.documentElement).getPropertyValue(
      cssVariable,
    )
  }
  /* eslint-enable */

  if (variableValue) {
    return variableValue.trim()
  } else {
    throw new PolishedError(74)
  }
}
