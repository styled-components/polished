// @flow

/**
 * Provides an easy way to change the `word-wrap` property
 *
 * @static
 * @example
 * const styles = {
 *   ...wordWrap('break-all')
 * }
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflow-wrap: 'break-all',
 *   word-wrap: 'break-all',
 *   word-break: 'break-all',
 * }
 */

function wordWrap(wrap: string = 'break-word') {
  const wordBreak = wrap === 'break-word' ? 'break-all' : wrap
  return {
    'overflow-wrap': wrap,
    'word-wrap': wrap,
    'word-break': wordBreak,
  }
}

export default wordWrap
