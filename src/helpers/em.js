// @flow
/** @module Helpers */

import stripUnit from './stripUnit'

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
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
  let newPxval = pxval
  let newBase = base
  if (typeof pxval === 'string') {
    newPxval = stripUnit(pxval)
  }

  if (typeof base === 'string') {
    newBase = stripUnit(base)
  }

  if (typeof newPxval === 'string') {
    throw new Error(`Passed invalid pixel value ("${pxval}") to em(), please pass a value like "12px" or 12.`)
  }

  if (typeof newBase === 'string') {
    throw new Error(`Passed invalid base value ("${base}") to em(), please pass a value like "12px" or 12.`)
  }

  return `${newPxval / newBase}em`
}

export default em
