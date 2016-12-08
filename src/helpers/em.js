// @flow
/** @module Helpers */

import stripUnit from './stripUnit'

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed with the second argument
 * @static
 * @param {string|number} pxval - The pixel value you want to convert
 * @param {string|number} [base = "16px"] - The base size to convert from
 * @return {String} The converted value
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

/* eslint-disable no-param-reassign */
function em(pxval: string|number, base?: string|number = '16px') {
  if (typeof pxval === 'string') {
    pxval = stripUnit(pxval)
  }
  if (base && typeof base === 'string') {
    base = stripUnit(base)
  }

  // $FlowFixMe
  return `${pxval / base}em`
}

export default em
