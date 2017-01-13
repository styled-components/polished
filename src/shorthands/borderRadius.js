// @flow

/**
 * The border-radius shorthand accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'border-top-right-radius': '5px',
 *   'border-top-left-radius': '5px',
 * }
 */

function borderRadius(side:string, radius:string) {
  if (!radius || typeof radius !== 'string') throw new Error('borderRadius expects a radius value as a string.')
  if (side === 'top' || side === 'bottom') {
    return {
      [`border-${side}-right-radius`]: radius,
      [`border-${side}-left-radius`]: radius,
    }
  }

  if (side === 'left' || side === 'right') {
    return {
      [`border-top-${side}-radius`]: radius,
      [`border-bottom-${side}-radius`]: radius,
    }
  }

  throw new Error('borderRadius expects a valid value for side.')
}

export default borderRadius
