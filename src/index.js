// @flow
// Helpers
import stripUnit from './helpers/stripUnit'
import em from './helpers/em'

// Mixins
import clearFix from './mixins/clearFix'
import ellipsis from './mixins/ellipsis'

const polished = {
  clearFix,
  ellipsis,
  stripUnit,
  em,
}

export default polished
export { clearFix, ellipsis, stripUnit, em }
