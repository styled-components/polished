/**
 * Represents truncated text with an ellipsis.
 * @name Ellipsis
 * @param {String} [width = 100%]
 *   Max-width for text to respect before being truncated.
 *
 * @returns {Object}
 *   CSS as JS for truncating text.
 *
 * @example Usage with param
 *   Ellipsis(250px)
 *
 * @example Output with param
 * {
 *   'display': 'inline-block',
 *   'max-width': '250px',
 *   'overflow': 'hidden',
 *   'text-overflow': 'ellipsis',
 *   'white-space': 'nowrap',
 *   'word-wrap': 'normal'
 * }
 *
 * @example Usage with default
 *   Ellipsis()
 *
 * @example Output with default
 * {
 *   'display': 'inline-block',
 *   'max-width': '100%',
 *   'overflow': 'hidden',
 *   'text-overflow': 'ellipsis',
 *   'white-space': 'nowrap',
 *   'word-wrap': 'normal'
 * }
 *
 */

export default function Ellipsis(width = '100%') {
  return {
    'display': 'inline-block',
    'max-width': width,
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    'word-wrap': 'normal'
  }
}
