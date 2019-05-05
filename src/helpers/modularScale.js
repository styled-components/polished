// @flow
import stripUnit from './stripUnit'
import PolishedError from '../internalHelpers/_errors'

/**
 * Establish consistent measurements and spacial relationships throughout your projects by incrementing any value up or down a defined scale. We provide a list of commonly used scales in `presets/modularScaleRatios`.
 * @example
 * // Styles as object usage
 * const styles = {
 *    // Increment two steps up the default scale
 *   'fontSize': modularScale(2)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *    // Increment two steps up the default scale
 *   fontSize: ${modularScale(2)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'fontSize': '1.77689em'
 * }
 */
export default function modularScale(
  steps: number,
  base?: number | string = '1em',
  ratio?: number = 1.333,
): string {
  if (typeof steps !== 'number') {
    throw new PolishedError(42)
  }

  if (typeof ratio !== 'number') {
    throw new PolishedError(43)
  }

  const [realBase, unit] = typeof base === 'string' ? stripUnit(base, true) : [base, '']

  if (typeof realBase === 'string') {
    throw new PolishedError(44, base)
  }

  return `${realBase * ratio ** steps}${unit}`
}
