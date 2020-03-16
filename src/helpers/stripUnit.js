// @flow

const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/

/**
 * Returns a given CSS value minus its unit.
 *
 * @deprecated - stripUnit's unitReturn functionality has been marked for deprecation in polished 4.0. It's functionality has been been moved to getUnitAndValue.
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
export default function stripUnit(
  value: string | number,
  unitReturn?: boolean,
): any {
  if (typeof value !== 'string') return unitReturn ? [value, undefined] : value
  const matchedValue = value.match(cssRegex)

  if (unitReturn) {
    console.warn(
      "stripUnit's unitReturn functionality has been marked for deprecation in polished 4.0. It's functionality has been been moved to getUnitAndValue.",
    )
    if (matchedValue) return [parseFloat(value), matchedValue[2]]
    return [value, undefined]
  }

  if (matchedValue) return parseFloat(value)
  return value
}
