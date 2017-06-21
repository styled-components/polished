// @flow

/**
 * Returns the unit from a given CSS value. (or null if an invalid string was passed)
 */

const units = [
  '%',
  'ch',
  'cm',
  'em',
  'ex',
  'ic',
  'in',
  'mm',
  'lh',
  'pc',
  'pt',
  'px',
  'rem',
  'rlh',
  'vh',
  'vi',
  'vb',
  'q',
  'vmax',
  'vmin',
  'vw',
]

function getUnit(value: string): string | null {
  const unit = value.replace(/[^a-zA-Z-%]/g, '')
  return units.includes(unit) ? unit : null
}

export default getUnit
