// @flow
// Helpers
import stripUnit from './helpers/stripUnit'
import rem from './helpers/rem'

// Mixins
import clearFix from './mixins/clearFix'
import ellipsis from './mixins/ellipsis'

const polished = {
  clearFix,
  ellipsis,
  stripUnit,
  rem,
}

export default polished
export { clearFix, ellipsis, stripUnit, rem }
