// @flow
import directionalProperty from '../helpers/directionalProperty'

/**
 * The border-width shorthand accepts up to four values, including null to skip a value, and uses the directional-property mixin to map them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderWidth('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderWidth('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'border-top-width': '12px',
 *   'border-right-width': '24px',
 *   'border-bottom-width': '36px',
 *   'border-left-width': '48px'
 * }
 */

function borderWidth(...values: Array<?string>) {
  return directionalProperty('border-width', ...values)
}

export default borderWidth
