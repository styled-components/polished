// @flow

import contains from '../internalHelpers/_contains'
import omit from '../internalHelpers/_omit'
import pick from '../internalHelpers/_pick'

// NOTE: Due to conflict with an actual CSS property, the `perspective`
// transform function is not included.
const transformFunctions = [
  'matrix',
  'matrix3d',
  'rotate',
  'rotate3d',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scale3d',
  'scaleX',
  'scaleY',
  'scaleZ',
  'skew',
  'skewX',
  'skewY',
  'translate',
  'translate3d',
  'translateX',
  'translateY',
  'translateZ',
]

// Transform functions which have implicit px units.
const pxUnits = [
  'translateX',
  'translateY',
  'translateZ',
]

 /**
 * Merged transform function properties into the `transform` property. Any
 * properties on the style object that match css transform functions are removed
 * from the style and appended to the `transform` property.
  *
  * @example
  * // Styles as object usage
  * const styles = {
  *   ...applyTransform({
  *     translate: 10,
  *     rotate: '15deg',
  *   }),
  * }
  *
  * // styled-components usage
  * const div = styled.div`
  *   ${applyTransform({
  *     translate: 10,
  *     rotate: '15deg',
  *   })}
  * `
  *
  * // CSS in JS Output
  * element {
  *   transform: translate(10px) rotate(15deg);
  * }
  */
export default (base: Object) => {
  const styles = omit(transformFunctions, base)
  const transforms = pick(transformFunctions, base)

  const initial = styles.transform && !/^\s*?none\s*?$/.test(styles.transform)
    ? [styles.transform]
    : []

  return {
    ...styles,
    transform: Object.keys(transforms).reduce((result, key) => {
      const val = transforms[key]
      const transform = `${key}(${contains(key, pxUnits) ? `${val}px` : val})`
      return result.concat([transform])
    }, initial).join(' '),
  }
}
