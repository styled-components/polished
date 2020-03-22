// @flow

const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/

/**
 * Returns a given CSS value minus its unit of measure.
 *
 * @deprecated - stripUnit's unitReturn functionality has been marked for deprecation in polished 4.0. It's functionality has been been moved to getUnitAndValue.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */
export default function stripUnit(
  value: string | number,
  unitReturn?: boolean,
): any {
  if (typeof value !== 'string') return unitReturn ? [value, undefined] : value
  const matchedValue = value.match(cssRegex)

  if (unitReturn) {
    // eslint-disable-next-line no-console
    console.warn(
      "stripUnit's unitReturn functionality has been marked for deprecation in polished 4.0. It's functionality has been been moved to getUnitAndValue.",
    )
    if (matchedValue) return [parseFloat(value), matchedValue[2]]
    return [value, undefined]
  }

  if (matchedValue) return parseFloat(value)
  return value
}
