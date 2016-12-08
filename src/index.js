// @flow
// Helpers
import stripUnit from './helpers/stripUnit'

// Mixins
import clearFix from './mixins/clearFix'
import ellipsis from './mixins/ellipsis'
import hideText from './mixins/hideText'
import hiDIPI from './mixins/hiDPI'
import timingFunctions from './mixins/timingFunctions'
import wordWrap from './mixins/wordWrap'

const polished = {
  clearFix,
  ellipsis,
  hideText,
  hiDIPI,
  stripUnit,
  timingFunctions,
  wordWrap,
}

export default polished

export {
  clearFix,
  ellipsis,
  hideText,
  hiDIPI,
  stripUnit,
  timingFunctions,
  wordWrap,
}
