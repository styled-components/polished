<<<<<<< HEAD
/** @module Mixins */

/**
 * CSS to contain a float (credit to CSSMojo)
 * @static
 * @param {string} [parent = &] - Optional parent selector
 * @return {Object} CSS as JS.
 * @example
 * // Styles as object usage
 * PENDING...
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '',
 *   'display': 'table'
 * }
 */

function clearFix(parent = `&`) {
  const pseudoSelector = `${parent}::after`
  return {
    [pseudoSelector]: {
      'clear': 'both',
      'content': '',
      'display': 'table'
    }
  }
=======
// @flow
export default function() {
  return 'clearfix'
>>>>>>> fc7f9b5... chore: Add flow type annotations
}

export default clearFix
