// @flow
// Helpers
import stripUnit from './helpers/stripUnit'

// Mixins
import clearFix from './mixins/clearFix'
import ellipsis from './mixins/ellipsis'
<<<<<<< HEAD
import hideText from './mixins/hideText'
import hiDIPI from './mixins/hiDPI'
import timingFunctions from './mixins/timingFunctions'
import wordWrap from './mixins/wordWrap'
=======
import selection from './mixins/selection'
>>>>>>> f42fb97... chore(selection): Add selection mixin

const polished = {
  clearFix,
  ellipsis,
<<<<<<< HEAD
  hideText,
  hiDIPI,
=======
  selection,
>>>>>>> f42fb97... chore(selection): Add selection mixin
  stripUnit,
  timingFunctions,
  wordWrap,
}

export default polished
<<<<<<< HEAD

export {
  clearFix,
  ellipsis,
  hideText,
  hiDIPI,
  stripUnit,
  timingFunctions,
  wordWrap,
=======
export {
  clearFix,
  ellipsis,
  selection,
  stripUnit
>>>>>>> f42fb97... chore(selection): Add selection mixin
}
