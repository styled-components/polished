// @flow
const positionMap = ['top', 'right', 'bottom', 'left']

function generateProperty(property: string, position: string) {
  if (!property) return position
  const splitPropertyName = property.split('-')
  splitPropertyName.splice(1, 0, position)
  return splitPropertyName.join('-')
}

function generateStyles(property: string, valuesWithDefaults: Array<?string>) {
  const styles = {}
  for (let i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i]) {
      styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i]
    }
  }
  return styles
}

/**
 * The directional property helper enables shorthand for direction based properties. It accepts a property and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can optionally pass a null argument for a directional value to ignore it.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'padding-top': '12px',
 *   'padding-right': '24px',
 *   'padding-bottom': '36px',
 *   'padding-left': '48px'
 * }
 */

function directionalProperty(property: string, ...values: Array<?string>) {
  // $FlowIgnoreNextLine doesn't understand destructuring with chained defaults.
  const [firstValue, secondValue = firstValue, thirdValue = firstValue, fourthValue = secondValue] = values
  const valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue]
  return generateStyles(property, valuesWithDefaults)
}

export default directionalProperty
