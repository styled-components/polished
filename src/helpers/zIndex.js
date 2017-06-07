// @flow

/**
 * Returns the z-index value in array or object
 * first parameter: key in the array or object
 * second paramater: z-index array or object
 *   if it is array, first element of array
 *   will have the highest z-index value, last element of array will have
 *   the lowest z-index value
 *   if it is object, it will return the z-index of key
 * third parameter (optional): base z-index. this helper function will add the base value
 *   to the z-index value of the key.
 *
 * @example
 * const zArray = ['modal', 'backDrop', 'lightbox', 'header', 'base']
 * // Styles as object usage
 * const styles = {
 *   ...zIndex('header', zArray)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${zIndex('header', zArray)}
 * `
 *
 * // CSS in JS Output
 *
 * div {
 *   z-index: 2;
 * }
 */

function zIndex(layer: string, layers: Array | Object, base: number = 0) {
  if (!layer) throw new Error('zIndex expects a layer name in first parameter')

  if (Array.isArray(layers)) {
    const reversedLayers = layers.slice().reverse()
    return {
      'z-index': base + reversedLayers.indexOf(layer),
    }
  } else if (typeof layers === 'object') {
    return {
      'z-index': layers[`${layer}`],
    }
  } else {
    throw new Error('zIndex expects an array or object of layers in second parameter')
  }
}

export default zIndex
