// @flow

import endsWith from './_endsWith'
import stripUnit from '../helpers/stripUnit'
import PolishedError from '../error'

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */
const pxtoFactory = (to: string) => (
  pxval: string | number,
  base?: string | number = '16px',
): string => {
  let newPxval = pxval
  let newBase = base
  if (typeof pxval === 'string') {
    if (!endsWith(pxval, 'px')) {
      throw new PolishedError(12, to, pxval)
    }
    newPxval = stripUnit(pxval)
  }

  if (typeof base === 'string') {
    if (!endsWith(base, 'px')) {
      throw new PolishedError(13, to, base)
    }
    newBase = stripUnit(base)
  }

  if (typeof newPxval === 'string') {
    throw new PolishedError(14, pxval, to)
  }

  if (typeof newBase === 'string') {
    throw new PolishedError(15, base, to)
  }

  return `${newPxval / newBase}${to}`
}

export default pxtoFactory
