// @flow
import PolishedError from '../internalHelpers/_errors'

import type { SideKeyword } from '../types/sideKeyword'
import type { Styles } from '../types/style'
import type { TriangleConfiguration } from '../types/triangleConfiguration'

const getBorderWidth = (
  pointingDirection: SideKeyword,
  height: number | string,
  width: number | string,
): string => {
  const fullWidth = width
  const halfWidth = `calc(${width} / 2)`
  const fullHeight = height
  const halfHeight = `calc(${height} / 2)`

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

const getBorderColor = (pointingDirection: SideKeyword, foregroundColor: string): Object => {
  switch (pointingDirection) {
    case 'top':
    case 'bottomRight':
      return { borderBottomColor: foregroundColor }
    case 'right':
    case 'bottomLeft':
      return { borderLeftColor: foregroundColor }
    case 'bottom':
    case 'topLeft':
      return { borderTopColor: foregroundColor }
    case 'left':
    case 'topRight':
      return { borderRightColor: foregroundColor }

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
  return {
    width: '0',
    height: '0',
    borderColor: backgroundColor,
    ...getBorderColor(pointingDirection, foregroundColor),
    borderStyle: 'solid',
    borderWidth: getBorderWidth(
      pointingDirection,
      typeof height === 'number' ? `${height}px` : height,
      typeof width === 'number' ? `${width}px` : width,
    ),
  }
}
