import directionalProperty from '../helpers/directionalProperty'

const propertyMap = ['borderWidth', 'borderStyle', 'borderColor']

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...border('2px', 'solid', '#000')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderWidth('2px', 'solid', '#000')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderBottomColor': '#000',
 *   'borderBottomStyle': 'solid',
 *   'borderBottomWidth': '2px',
 *   'borderLeftColor': '#000',
 *   'borderLeftStyle': 'solid',
 *   'borderLeftWidth': '2px',
 *   'borderRightColor': '#000',
 *   'borderRightStyle': 'solid',
 *   'borderRightWidth': '2px',
 *   'borderTopColor': '#000',
 *   'borderTopStyle': 'solid',
 *   'borderTopWidth': '2px',
 * }
 */
function border(...values: Array<?string | ?number>): Object {
  let styles = {}
  for (let i = 0; i < Math.min(values.length, propertyMap.length); i += 1) {
    styles = { ...styles, ...directionalProperty(propertyMap[i], values[i]) }
  }

  return styles
}

export default border
