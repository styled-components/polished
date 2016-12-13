// @flow

import endsWith from '../internalHelpers/_endsWith'
import stripUnit from './stripUnit'

/**
 * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */

/* eslint-disable no-param-reassign */
function rem(pxval: string|number, base?: string|number = '16px') {
  let newPxval = pxval
  let newBase = base
  if (typeof pxval === 'string') {
    if (!endsWith(pxval, 'px')) {
      throw new Error(`Expected a string ending in "px" or a number passed as the first argument to rem(), got "${pxval}" instead.`)
    }
    newPxval = stripUnit(pxval)
  }

  if (typeof base === 'string') {
    if (!endsWith(base, 'px')) {
      throw new Error(`Expected a string ending in "px" or a number passed as the second argument to rem(), got "${base}" instead.`)
    }
    newBase = stripUnit(base)
  }

  if (typeof newPxval === 'string') {
    throw new Error(`Passed invalid pixel value ("${pxval}") to rem(), please pass a value like "12px" or 12.`)
  }

  if (typeof newBase === 'string') {
    throw new Error(`Passed invalid base value ("${base}") to rem(), please pass a value like "12px" or 12.`)
  }

  return `${newPxval / newBase}rem`
}

export default rem
