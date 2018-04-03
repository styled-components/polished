// @flow
import getLuminance from './getLuminance'
import curry from '../internalHelpers/_curry'

/**
 * Given two colors, returns the contrast ratio.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: contrastRatio('#CCCD64', '#0000ff') > 0.5 ? '#CCCD64' : '#0000ff',
 *   background: contrastRatio('rgba(58, 133, 255, 1)', 'rgba(255, 57, 149, 1)') > 0.5 ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${contrastRatio('#CCCD64', '#0000ff') > 0.5 ? '#CCCD64' : '#0000ff'};
 *   background: ${contrastRatio('rgba(58, 133, 255, 1)', 'rgba(255, 57, 149, 1)') > 0.5 ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */

function contrastRatio(color1: string, color2: string): number {
  return Math.abs(getLuminance(color1) - getLuminance(color2))
}

const curriedContrastRatio = curry(contrastRatio)
export default curriedContrastRatio
