// @flow
import type { LinearGradientConfiguration } from '../types/linearGradientConfiguration'
import type { Styles } from '../types/style'

function parseFallback(colorStops: Array<string>): string {
  return colorStops[0].split(' ')[0]
}

function constructGradientValue(
  literals: Array<string>,
  ...substitutions: Array<string>
): string {
  let template = ''
  for (let i = 0; i < literals.length; i += 1) {
    template += literals[i]
    // Adds leading coma if properties preceed color-stops
    if (i === 1 && substitutions[i] && substitutions[0]) {
      template = template.slice(0, -1)
      template += `, ${substitutions[i]}`
      // No trailing space if color-stops is the only param provided
    } else if (i === 1 && substitutions[i] && !substitutions[0]) {
      template += `${substitutions[i]}`
      // Only adds substitution if it is defined
    } else if (substitutions[i]) {
      template += `${substitutions[i]} `
    }
  }
  return template.trim()
}

/**
 * CSS for declaring a linear gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#FFF',
 *   'backgroundImage': 'linear-gradient(to top right, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */
function linearGradient({
  colorStops,
  fallback,
  toDirection,
}: LinearGradientConfiguration): Styles {
  if (!colorStops || colorStops.length < 2) {
    throw new Error(
      'linearGradient requries at least 2 color-stops to properly render.',
    )
  }
  return {
    backgroundColor: fallback || parseFallback(colorStops),
    backgroundImage: constructGradientValue`linear-gradient(${toDirection}${colorStops.join(
      ', ',
    )})`,
  }
}

export default linearGradient
