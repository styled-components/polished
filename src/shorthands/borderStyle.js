// @flow
import directionalProperty from '../helpers/directionalProperty'

/**
 * The border-style shorthand accepts up to four values, including null to skip a value, and uses the directional-property mixin to map them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'border-top-style': 'solid',
 *   'border-right-style': 'dashed',
 *   'border-bottom-style': 'dotted',
 *   'border-left-style': 'double'
 * }
 */

function borderStyle(...values: Array<?string>) {
  return directionalProperty('border-style', ...values)
}

export default borderStyle
