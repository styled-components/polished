// @flow
const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/

/**
 * Returns a given CSS value and its unit as elements of an array.
 *
 * @deprecated - getValueAndUnit has been marked for deprecation in polished 3.0 and will be fully deprecated in 4.0. It's functionality has been been moved to stripUnit as an optional return.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': getValueAndUnit('100px')[0],
 *   '--unit': getValueAndUnit('100px')[1],
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${getValueAndUnit('100px')[0]};
 *   --unit: ${getValueAndUnit('100px')[1]};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100,
 *   '--unit': 'px',
 * }
 */
export default function getValueAndUnit(
  value: string,
): [number | string, string | void] {
  // eslint-disable-next-line no-console
  console.warn(
    "getValueAndUnit has been marked for deprecation in polished 3.0 and will be fully deprecated in 4.0. It's functionality has been been moved to stripUnit as an optional return.",
  )
  if (typeof value !== 'string') return [value, '']
  const matchedValue = value.match(cssRegex)
  if (matchedValue) return [parseFloat(value), matchedValue[2]]
  return [value, undefined]
}
