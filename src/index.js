// @flow
// Helpers
import stripUnit from './helpers/stripUnit'
import em from './helpers/em'
import rem from './helpers/rem'

// Mixins
import clearFix from './mixins/clearFix'
import ellipsis from './mixins/ellipsis'
import hideText from './mixins/hideText'
import hiDPI from './mixins/hiDPI'
import selection from './mixins/selection'
import size from './mixins/size'
import timingFunctions from './mixins/timingFunctions'
import wordWrap from './mixins/wordWrap'

const polished = {
  clearFix,
  ellipsis,
  em,
  hideText,
  hiDPI,
  rem,
  selection,
  size,
  stripUnit,
  timingFunctions,
  wordWrap,
}

export default polished

export {
  clearFix,
  ellipsis,
  em,
  hideText,
  hiDPI,
  rem,
  selection,
  size,
  stripUnit,
  timingFunctions,
  wordWrap,
}
