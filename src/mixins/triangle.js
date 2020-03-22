// @flow
import getValueAndUnit from '../helpers/getValueAndUnit'
import PolishedError from '../internalHelpers/_errors'

import type { SideKeyword } from '../types/sideKeyword'
import type { Styles } from '../types/style'
import type { TriangleConfiguration } from '../types/triangleConfiguration'

const getBorderWidth = (
  pointingDirection: SideKeyword,
  height: [number, string],
  width: [number, string],
): string => {
  const fullWidth = `${width[0]}${width[1] || ''}`
  const halfWidth = `${width[0] / 2}${width[1] || ''}`
  const fullHeight = `${height[0]}${height[1] || ''}`
  const halfHeight = `${height[0] / 2}${height[1] || ''}`

  switch (pointingDirection) {
    case 'top':
      return `0 ${halfWidth} ${fullHeight} ${halfWidth}`
    case 'topLeft':
      return `${fullWidth} ${fullHeight} 0 0`
    case 'left':
      return `${halfHeight} ${fullWidth} ${halfHeight} 0`
    case 'bottomLeft':
      return `${fullWidth} 0 0 ${fullHeight}`
    case 'bottom':
      return `${fullHeight} ${halfWidth} 0 ${halfWidth}`
    case 'bottomRight':
      return `0 0 ${fullWidth} ${fullHeight}`
    case 'right':
      return `${halfHeight} 0 ${halfHeight} ${fullWidth}`
    case 'topRight':
    default:
      return `0 ${fullWidth} ${fullHeight} 0`
  }
}

const getBorderColor = (
  pointingDirection: SideKeyword,
  foregroundColor: string,
  backgroundColor: string,
): string => {
  switch (pointingDirection) {
    case 'top':
    case 'bottomRight':
      return `${backgroundColor} ${backgroundColor} ${foregroundColor} ${backgroundColor}`
    case 'right':
    case 'bottomLeft':
      return `${backgroundColor} ${backgroundColor} ${backgroundColor} ${foregroundColor}`
    case 'bottom':
    case 'topLeft':
      return `${foregroundColor} ${backgroundColor} ${backgroundColor} ${backgroundColor}`
    case 'left':
    case 'topRight':
      return `${backgroundColor} ${foregroundColor} ${backgroundColor} ${backgroundColor}`

    default:
      throw new PolishedError(59)
  }
}

/**
 * CSS to represent triangle with any pointing direction with an optional background color.
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
 *  'borderColor': 'transparent transparent transparent red',
 *  'borderStyle': 'solid',
 *  'borderWidth': '50px 0 50px 100px',
 *  'height': '0',
 *  'width': '0',
 * }
 */
export default function triangle({
  pointingDirection,
  height,
  width,
  foregroundColor,
  backgroundColor = 'transparent',
}: TriangleConfiguration): Styles {
  const widthAndUnit = getValueAndUnit(width)
  const heightAndUnit = getValueAndUnit(height)

  if (isNaN(heightAndUnit[0]) || isNaN(widthAndUnit[0])) {
    throw new PolishedError(60)
  }

  return {
    width: '0',
    height: '0',
    borderColor: getBorderColor(
      pointingDirection,
      foregroundColor,
      backgroundColor,
    ),
    borderStyle: 'solid',
    borderWidth: getBorderWidth(pointingDirection, heightAndUnit, widthAndUnit),
  }
}
