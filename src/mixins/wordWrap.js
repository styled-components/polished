/** @module Mixins */

/**
 * Provides an easy way to change the `word-wrap` property
 *
 * @static
 * @param {string} [wrap = 'break-word'] - Value for the word-break property
 * @return {Object} CSS as JS.
 * @example
 * div {
 *   wordWrap('break-all')
 * }
 *
 * // CSS as JS Output
 *
 * div {
 *   overflow-wrap: 'break-all',
 *   word-wrap: 'break-all',
 *   word-break: 'break-all',
 * }
 */

function wordWrap(wrap = 'break-word') {
  const wordBreak = wrap === 'break-word' ? 'break-all' : wrap
  return {
    'overflow-wrap': wrap,
    'word-wrap': wrap,
    'word-break': wordBreak,
  }
}

export default wordWrap

