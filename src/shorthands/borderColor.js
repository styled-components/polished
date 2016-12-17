// @flow
import directionalProperty from '../helpers/directionalProperty'

/**
 * The border-color shorthand accepts up to four values, including null to skip a value, and uses the directional-property mixin to map them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderColor('red', 'green', 'blue', 'yellow')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderColor('red', 'green', 'blue', 'yellow')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'border-top-color': 'red',
 *   'border-right-color': 'green',
 *   'border-bottom-color': 'blue',
 *   'border-left-color': 'yellow'
 * }
 */

function borderColor(...values: Array<?string>) {
  return directionalProperty('border-color', ...values)
}

export default borderColor
