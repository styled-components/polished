// @flow
/** @module Helpers */

import ms from 'modular-scale'

const ratioNames = [
  'minorSecond',
  'majorSecond',
  'minorThird',
  'majorThird',
  'perfectFourth',
  'augFourth',
  'perfectFifth',
  'minorSixth',
  'goldenSection',
  'majorSixth',
  'minorSeventh',
  'majorSeventh',
  'octave',
  'majorTenth',
  'majorEleventh',
  'majorTwelfth',
  'doubleOctave',
]

/**
 * Establish consistent measurements and spacial relationships throughout your projects by incrementing up or down a defined scale. We provide a list of commonly used scales as pre-defined variables, see below.
 * @static
 * @param {number} steps - The amount of steps to move along the scale. Any integer.
 * @param {string} [base] - The base value to generate the scale from.
 * @param {(number|'minorSecond'|'majorSecond'|'minorThird'|'majorThird'|'perfectFourth'|'augFourth'|'perfectFifth'|'minorSixth'|'goldenSection'|'majorSixth'|'minorSeventh'|'majorSeventh'|'octave'|'majorTenth'|'majorEleventh'|'majorTwelfth'|'doubleOctave')} [ratio] - The scale ratio, can either be a number or one of the pre-defined scales from below.
 * @return {string} The size in ems.
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

function modularScale(steps: number, base?: string = '1em', ratio?: Ratio = 'perfectFourth') {
  if (!steps) {
    throw new Error('Please provide a number of steps to the modularScale helper.')
  }
  if (typeof ratio === 'string' && ratioNames.indexOf(ratio) === -1) {
    throw new Error('Please pass a number or one of the predefined scales to modularScale.')
  }

  const scale = ms({
    ratios: [ratio],
    bases: [base],
  })

  return `${scale(steps)}em`
}

export { ratioNames }
export default modularScale
