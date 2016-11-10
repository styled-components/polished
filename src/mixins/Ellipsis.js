/** @module Mixins */

/**
 * CSS to represent truncated text with an ellipsis.
 * @static
 * @param {string} [width = 100%] - Max-width for text to respect before being truncated.
 * @return {Object} CSS as JS.
 * @example
 * div {
 *   ellipsis(250px)
 * }
 *
 * // CSS as JS Output
 *
 * div {
 *   'display': 'inline-block',
 *   'max-width': '250px',
 *   'overflow': 'hidden',
 *   'text-overflow': 'ellipsis',
 *   'white-space': 'nowrap',
 *   'word-wrap': 'normal'
 * }
 */

function ellipsis(width = '100%') {
  return {
    'display': 'inline-block',
    'max-width': width,
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    'word-wrap': 'normal',
  }
}

export default ellipsis
