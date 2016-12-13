// @flow

import ms from 'simple-modular-scale'
import stripUnit from './stripUnit'

const ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4,
}

type Ratio =
  | number
  | 'minorSecond'
  | 'majorSecond'
  | 'minorThird'
  | 'majorThird'
  | 'perfectFourth'
  | 'augFourth'
  | 'perfectFifth'
  | 'minorSixth'
  | 'goldenSection'
  | 'majorSixth'
  | 'minorSeventh'
  | 'majorSeventh'
  | 'octave'
  | 'majorTenth'
  | 'majorEleventh'
  | 'majorTwelfth'
  | 'doubleOctave'

// Cache the scale computation to avoid computing everytime
const scalesCache = {}

/**
 * Establish consistent measurements and spacial relationships throughout your projects by incrementing up or down a defined scale. We provide a list of commonly used scales as pre-defined variables, see below.
 * @example
 * // Styles as object usage
 * const styles = {
 *    // Increment two steps up the default scale
 *   'font-size': modularScale(2)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *    // Increment two steps up the default scale
 *   font-size: ${modularScale(2)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'font-size': '1.77689em'
 * }
 */
function modularScale(steps: number, base?: number|string = '1em', ratio?: Ratio = 'perfectFourth') {
  if (!steps) {
    throw new Error('Please provide a number of steps to the modularScale helper.')
  }
  if (steps < 0 || steps > 16) {
    throw new Error('The number of steps passed to the modularScale helper needs to be between 0 and 16.')
  }
  if (typeof ratio === 'string' && !ratioNames[ratio]) {
    throw new Error('Please pass a number or one of the predefined scales to the modularScale helper as the ratio.')
  }

  const realBase = typeof base === 'string' ? stripUnit(base) : base
  const realRatio = typeof ratio === 'string' ? ratioNames[ratio] : ratio

  // Return the cached scale if it's been computed before
  const scale = (scalesCache[realBase] && scalesCache[realBase][realRatio]) || ms({
    base: realBase,
    ratios: [realRatio],
  })

  // Cache the computed scale for the next roundtrip
  if (!scalesCache[realBase]) scalesCache[realBase] = {}
  if (!scalesCache[realBase][realRatio]) scalesCache[realBase][realRatio] = scale

  return `${scale[steps]}em`
}

export { ratioNames }
export default modularScale
