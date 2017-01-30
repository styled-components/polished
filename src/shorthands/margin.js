// @flow
import directionalProperty from '../helpers/directionalProperty'

/**
 * The margin shorthand accepts up to four values, including null to skip a value, and uses the directional-property mixin to map them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...margin('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${margin('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'margin-top': '12px',
 *   'margin-right': '24px',
 *   'margin-bottom': '36px',
 *   'margin-left': '48px'
 * }
 */

function margin(...values: Array<?string>) {
  return directionalProperty('margin', ...values)
}

export default margin
