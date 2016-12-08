// @flow
/** @module Shorthands */

/**
 * Shorthand for easily setting the animation property
 * @static
 * @param {...(string|number)} [arguments] - Up to eight animation properties
 * @return {Object} CSS as JS.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation('rotate', '1s', 'ease-in-out')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation('rotate', '1s', 'ease-in-out')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out'
 * }
 */

function animation(...args: Array<string|number>) {
  if (args.length > 8) {
    throw new Error('The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation')
  }

  return {
    'animation': args.join(' '),
  }
}

export default animation
