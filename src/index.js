// @flow
// Helpers
import stripUnit from './helpers/stripUnit'

// Mixins
import clearFix from './mixins/clearFix'
import ellipsis from './mixins/ellipsis'
import timingFunctions from './mixins/timingFunctions'

const polished = {
  clearFix,
  ellipsis,
  stripUnit,
  timingFunctions,
}

export default polished
export { clearFix, ellipsis, stripUnit, timingFunctions }
