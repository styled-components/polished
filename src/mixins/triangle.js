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
  height: [number, string],
  width: [number, string],
): string => {
  switch (pointingDirection) {
    case 'top':
      return `0 ${width[0] / 2}${width[1]} ${height[0]}${height[1]} ${width[0] /
        2}${width[1]}`
    case 'left':
      return `${height[0] / 2}${height[1]} ${width[0]}${width[1]} ${height[0] /
        2}${height[1]} 0`
    case 'bottom':
      return `${height[0]}${height[1]} ${width[0] / 2}${width[1]} 0 ${width[0] /
        2}${width[1]}`
    case 'right':
      return `${height[0] / 2}${height[1]} 0 ${height[0] / 2}${height[1]} ${
        width[0]
      }${width[1]}`

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
  const widthAndUnit = [
    parseFloat(width),
    String(width).replace(/\d+/g, '') || 'px',
  ]
  const heightAndUnit = [
    parseFloat(height),
    String(height).replace(/\d+/g, '') || 'px',
  ]
  if (isNaN(heightAndUnit[0]) || isNaN(widthAndUnit[0])) {
    throw new Error('Passed an invalid value to `height` or `width`. Please provide a pixel based unit')
  }
  return {
    borderColor: backgroundColor,
    width: '0',
    height: '0',
    borderWidth: getBorderWidth(pointingDirection, heightAndUnit, widthAndUnit),
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
