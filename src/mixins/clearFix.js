<<<<<<< HEAD
/** @module Mixins */

/**
 * CSS to contain a float (credit to CSSMojo)
 * @static
 * @param {string} [parent = &] - Optional parent selector
 * @return {Object} CSS as JS.
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
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

<<<<<<< HEAD
function clearFix(parent = `&`) {
=======
function clearFix(parent: string = '&') {
>>>>>>> d5c2354... chore(Linting): Fix linting
  const pseudoSelector = `${parent}::after`
  return {
    [pseudoSelector]: {
      'clear': 'both',
      'content': '',
      'display': 'table',
    },
  }
=======
// @flow
export default function() {
  return 'clearfix'
>>>>>>> fc7f9b5... chore: Add flow type annotations
}

export default clearFix
