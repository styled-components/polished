// @flow
// Helpers
import em from './helpers/em'
<<<<<<< HEAD
import modularScale from './helpers/modularScale'
import rem from './helpers/rem'
=======
import stripUnit from './helpers/stripUnit'
>>>>>>> 4042d23... chore(shorthand): Simplify Buttons and Inputs to use shared helper

// Mixins
import clearFix from './mixins/clearFix'
import ellipsis from './mixins/ellipsis'
import hideText from './mixins/hideText'
import hiDPI from './mixins/hiDPI'
import placeholder from './mixins/placeholder'
import retinaImage from './mixins/retinaImage'
import selection from './mixins/selection'
import size from './mixins/size'
import timingFunctions from './mixins/timingFunctions'
import wordWrap from './mixins/wordWrap'

<<<<<<< HEAD
// Shorthands
import animation from './shorthands/animation'

const polished = {
  animation,
  clearFix,
  ellipsis,
  em,
  modularScale,
  hideText,
  hiDPI,
  placeholder,
  rem,
  retinaImage,
  selection,
  size,
  stripUnit,
  timingFunctions,
  wordWrap,
}

export default polished

=======
>>>>>>> 4042d23... chore(shorthand): Simplify Buttons and Inputs to use shared helper
export {
  animation,
  clearFix,
  ellipsis,
  em,
  modularScale,
  hideText,
  hiDPI,
  placeholder,
  rem,
  retinaImage,
  selection,
  size,
  stripUnit,
  timingFunctions,
  wordWrap,
}
