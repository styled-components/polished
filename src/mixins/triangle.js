// @flow

/**
 * CSS to represent triangle with any pointing direction.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...triangle({ pointing: 'right', width: '100px', height: '100px'})
 * }
 * const styles = {
 *   ...triangle({ pointing: 'right', width: '100px', height: '100px'})
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${triangle({ pointing: 'right', width: '100px', height: '100px'})}
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

type TriangleArgs = {
  pointingDirection: PointingDirection,
  color: string,
  height: number,
  width: number,
}

type TriangleSizes = {
  height: number,
  width: number,
}

const getLeftPointingTriangle = ({ height, width } : TriangleSizes) => (
  `${height}px ${width}px ${height}px 0`
)

const getRightPointingTriangle = ({ height, width } : TriangleSizes) => (
  `${height}px 0 ${height}px ${width}px`
)

const getTopPointingTriangle = ({ height, width } : TriangleSizes) => (
  `0 ${width}px ${height}px ${width}px`
)

const getBottomPointingTriangle = ({ height, width } : TriangleSizes) => (
  `${height}px ${width}px 0 ${width}px`
)

function triangle({ pointingDirection, width, height, color } : TriangleArgs) {
  let borderWidth

  // check if arrow is in horizontal direction
  if (pointingDirection === 'left' || pointingDirection === 'right') {
    const sizes = {
      width,
      height: height / 2,
    }

    if (pointingDirection === 'left') {
      borderWidth = getLeftPointingTriangle(sizes)
    } else {
      borderWidth = getRightPointingTriangle(sizes)
    }
  } else {
    const sizes = {
      width: width / 2,
      height,
    }

    if (pointingDirection === 'top') {
      borderWidth = getTopPointingTriangle(sizes)
    } else {
      borderWidth = getBottomPointingTriangle(sizes)
    }
  }


  // needed for border-color
  const reverseDirection = {
    left: 'right',
    right: 'left',
    top: 'bottom',
    bottom: 'top',
  }

  return {
    'border-color': 'transparent',
    'width': '0',
    'height': '0',
    'border-width': borderWidth,
    'border-style': 'solid',

    /*
    * javascript Object sorting orders 'border-color' after 'border-bottom-color'
    * (bottom-b) is before (bottom-c) - !important is needed
    * { border-bottom-color: 'red', border-color: 'transparent' }
    */

    [`border-${reverseDirection[pointingDirection]}-color`]: `${color} !important`,
  }
}

export default triangle
