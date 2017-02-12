// @flow


/**
 * CSS to represent triangle with any pointing direction.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...triangle({ pointing: 'right', width: '100px', height: '100px', color: 'red' })
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${triangle({ pointing: 'right', width: '100px', height: '100px', color: 'red' })}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *  'border-color': 'transparent',
 *  'border-left-color': 'red !important',
 *  'border-style': 'solid',
 *  'border-width': '50px 0 50px 100px',
 *  'height': '0',
 *  'width': '0',
 * }
 */

type PointingDirection = 'top' | 'right' | 'bottom' | 'left'

type BorderWidthArgs = {
  height: number,
  width: number,
  pointingDirection: PointingDirection,
}

type TriangleArgs = BorderWidthArgs & {
  color: string,
}

const getBorderWidth = ({ pointingDirection, height, width } : BorderWidthArgs) => {
  switch (pointingDirection) {
    case 'top': return `0 ${width / 2}px ${height}px ${width / 2}px`
    case 'left': return `${height / 2}px ${width}px ${height / 2}px 0`
    case 'bottom': return `${height}px ${width / 2}px 0 ${width / 2}px`
    case 'right': return `${height / 2}px 0 ${height / 2}px ${width}px`

    default: throw new Error('Passed invalid argument to triangle, please pass correct poitingDirection e.g. \'right\'.')
  }
}

// needed for border-color
const reverseDirection = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
}

const triangle = ({ pointingDirection, width, height, color } : TriangleArgs) => ({
  'border-color': 'transparent',
  'width': '0',
  'height': '0',
  'border-width': getBorderWidth({ height, width, pointingDirection }),
  'border-style': 'solid',

  /*
  * javascript Object sorting orders 'border-color' after 'border-bottom-color'
  * (bottom-b) is before (bottom-c) - !important is needed
  * { border-bottom-color: 'red', border-color: 'transparent' }
  */

  [`border-${reverseDirection[pointingDirection]}-color`]: `${color} !important`,
})

export default triangle
