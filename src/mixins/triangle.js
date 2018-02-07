// @flow

/** */
type PointingDirection = 'top' | 'right' | 'bottom' | 'left'

type TriangleArgs = {
  backgroundColor?: string,
  foregroundColor: string,
  height: number | string,
  width: number | string,
  pointingDirection: PointingDirection,
}

const getBorderWidth = (
  pointingDirection: PointingDirection,
  height: number,
  width: number,
): string => {
  switch (pointingDirection) {
    case 'top':
      return `0 ${width / 2}px ${height}px ${width / 2}px`
    case 'left':
      return `${height / 2}px ${width}px ${height / 2}px 0`
    case 'bottom':
      return `${height}px ${width / 2}px 0 ${width / 2}px`
    case 'right':
      return `${height / 2}px 0 ${height / 2}px ${width}px`

    default:
      throw new Error("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.")
  }
}

// needed for border-color
const reverseDirection = {
  left: 'Right',
  right: 'Left',
  top: 'Bottom',
  bottom: 'Top',
}

/**
 * CSS to represent triangle with any pointing direction with an optional background color. Accepts number or px values for height and width.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *  'borderColor': 'transparent',
 *  'borderLeftColor': 'red !important',
 *  'borderStyle': 'solid',
 *  'borderWidth': '50px 0 50px 100px',
 *  'height': '0',
 *  'width': '0',
 * }
 */

function triangle({
  pointingDirection,
  height,
  width,
  foregroundColor,
  backgroundColor = 'transparent',
}: TriangleArgs): Object {
  const unitlessHeight = parseFloat(height)
  const unitlessWidth = parseFloat(width)
  if (isNaN(unitlessHeight) || isNaN(unitlessWidth)) {
    throw new Error('Passed an invalid value to `height` or `width`. Please provide a pixel based unit')
  }

  return {
    borderColor: backgroundColor,
    width: '0',
    height: '0',
    borderWidth: getBorderWidth(
      pointingDirection,
      unitlessHeight,
      unitlessWidth,
    ),
    borderStyle: 'solid',
    /*
    * javascript Object sorting orders 'border-color' after 'border-bottom-color'
    * (bottom-b) is before (bottom-c) - !important is needed
    * { border-bottom-color: 'red', border-color: 'transparent' }
    */
    [`border${
      reverseDirection[pointingDirection]
    }Color`]: `${foregroundColor} !important`,
  }
}

export default triangle
