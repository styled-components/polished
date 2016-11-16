// Helpers
import stripUnit from './helpers/stripUnit'

// Mixins
import clearFix from './mixins/clearFix'
import ellipsis from './mixins/ellipsis'

const polished = {
  clearFix,
  ellipsis,
  stripUnit,
}

export default polished
export { clearFix, ellipsis, stripUnit }
