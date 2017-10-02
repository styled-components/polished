// @flow

/**
 * CSS to style the placeholder pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...placeholder({'color': 'blue'})
 * }
 *
 * // styled-components usage
 * const div = styled.input`
 *    ${placeholder({'color': 'blue'})}
 * `
 *
 * // CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'blue',
 *   },
 * },
 */

function placeholder(styles: Object, parent?: string = '&'): Object {
  return {
    [`${parent}::-webkit-input-placeholder`]: {
      ...styles,
    },
    [`${parent}:-moz-placeholder`]: {
      ...styles,
    },
    [`${parent}::-moz-placeholder`]: {
      ...styles,
    },
    [`${parent}:-ms-input-placeholder`]: {
      ...styles,
    },
  }
}

export default placeholder
