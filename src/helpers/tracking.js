// @flow

/**
 * Convert tracking to letter-space friendly ems. Useful for converting
 * Adobe Illustrator, Indesign and Photoshop tracking values, in which
 * tracking is measured in 1/1000 em.
 * @name tracking
 * @function
 * @param {number} target
 * @example
 * // Styles as object usage
 * const styles = {
 *   'letterSpacing': tracking(50)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   letterSpacing: ${tracking(50)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'letterSpacing': '0.05em'
 * }
 */

const TRACKING_DIVISOR = 1000

const tracking: (target: number) => string = target =>
  `${target / TRACKING_DIVISOR}em`

export default tracking
