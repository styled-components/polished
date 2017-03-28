// @flow

/**
 * CSS to hide text to show a background image in a SEO-friendly way.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'background-image': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background-image: url(logo.png);
 *   ${hideText()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'background-image': 'url(logo.png)',
 *   'text-indent': '101%',
 *   'overflow': 'hidden',
 *   'white-space': 'nowrap',
 * }
 */

function hideText() {
  return {
    'text-indent': '101%',
    'overflow': 'hidden',
    'white-space': 'nowrap',
  }
}

export default hideText
