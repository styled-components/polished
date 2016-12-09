// @flow
// Helpers
import stripUnit from './helpers/stripUnit'

// Mixins
import clearFix from './mixins/clearFix'
import ellipsis from './mixins/ellipsis'
import hideText from './mixins/hideText'

const polished = {
  clearFix,
  ellipsis,
  stripUnit,
  hideText,
}

export default polished
export { clearFix, ellipsis, stripUnit, hideText }
