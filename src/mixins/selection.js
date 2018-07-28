// @flow
import { warning } from '../internalHelpers/_messageHandler'

import type { Styles } from '../types/style'

/**
 * CSS to style the selection pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...selection({
 *     'backgroundColor': 'blue'
 *   }, 'section')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${selection({'backgroundColor': 'blue'}, 'section')}
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'section::-moz-selection': {
 *     'backgroundColor':'blue',
 *   },
 *   'section::selection': {
 *     'backgroundColor': 'blue',
 *   }
 * }
 */
function selection(styles: Styles, parent?: string = ''): Styles {
  if (process.env.NODE_ENV !== 'production') {
    warning(
      'selection has been marked for deprecation in polished 2.0 and will be fully deprecated in 3.0. It is no longer needed and can safely be replaced with the non-prefixed selection pseudo-element.',
    )
  }
  return {
    [`${parent}::-moz-selection`]: {
      ...styles,
    },
    [`${parent}::selection`]: {
      ...styles,
    },
  }
}

export default selection
