// @flow
import getContrast from './getContrast'
import getLuminance from './getLuminance'

const defaultLightReturnColor = '#000'
const defaultDarkReturnColor = '#fff'

/**
 * Returns black or white (or optional light and dark return colors) for best
 * contrast depending on the luminosity of the given color.
 * When passing custom return colors, set `strict` to `true` to ensure that the
 * return color always meets or exceeds WCAG level AA or greater. If this test
 * fails, the default return color (black or white) is returned in place of the
 * custom return color.
 *
 * Follows [W3C specs for readability](https://www.w3.org/TR/WCAG20-TECHS/G18.html).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('black', '#001', '#ff8'),
 *   color: readableColor('white', '#001', '#ff8'),
 *   color: readableColor('red', '#333', '#ddd', true)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('black', '#001', '#ff8')};
 *   color: ${readableColor('white', '#001', '#ff8')};
 *   color: ${readableColor('red', '#333', '#ddd', true)};
 * `
 *
 * // CSS in JS Output
 * element {
 *   color: "#fff";
 *   color: "#ff8";
 *   color: "#001";
 *   color: "#000";
 * }
 */
export default function readableColor(
  color: string,
  lightReturnColor?: string = defaultLightReturnColor,
  darkReturnColor?: string = defaultDarkReturnColor,
  strict?: boolean = false,
): string {
  const isLightColor = getLuminance(color) > 0.179
  const preferredReturnColor = isLightColor ? lightReturnColor : darkReturnColor

  // TODO: Make `strict` the default behaviour in the next major release.
  // Without `strict`, this may return a color that does not meet WCAG AA.
  if (!strict || getContrast(color, preferredReturnColor) >= 4.5) {
    return preferredReturnColor
  }
  return isLightColor ? defaultLightReturnColor : defaultDarkReturnColor
}
