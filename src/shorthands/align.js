// @flow

/**
 * CSS to represent object in any position.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...align('right', '-10px')
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${align('right', '-10px')}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *  'position': 'absolute',
 *  'top': '50%',
 *  'right': '-10px',
 *  'transform': 'translateY(-50%)',
 * }
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...align('vertical')
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${align('vertical')}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *  'position': 'absolute',
 *  'top': '50%',
 *  'transform': 'translateY(-50%)',
 *  'margin-top': '0',
 * }
 */

type Position = 'center' | 'horizontal' | 'vertical' | 'top' | 'topRight' | 'right' | 'bottomRight' | 'bottom' | 'bottomLeft' | 'left' | 'topLeft'

type AlignWithArgs = {
  position: Position,
  offset: string,
}

const getAlignProperties = ({ position, offset } : AlignWithArgs) => {
  switch (position) {
    case 'center': {
      return {
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'margin-top': offset,
      }
    }

    case 'horizontal': {
      return {
        'position': 'absolute',
        'left': '50%',
        'transform': 'translateX(-50%)',
        'margin-top': offset,
      }
    }

    case 'vertical': {
      return {
        'position': 'absolute',
        'top': '50%',
        'transform': 'translateY(-50%)',
        'margin-top': offset,
      }
    }

    case 'top': {
      return {
        'position': 'absolute',
        'top': offset,
        'left': '50%',
        'transform': 'translateX(-50%)',
      }
    }

    case 'topRight': {
      return {
        'position': 'absolute',
        'top': offset,
        'right': offset,
      }
    }

    case 'right': {
      return {
        'position': 'absolute',
        'top': '50%',
        'right': offset,
        'transform': 'translateY(-50%)',
      }
    }

    case 'bottomRight': {
      return {
        'position': 'absolute',
        'bottom': offset,
        'right': offset,
      }
    }

    case 'bottom': {
      return {
        'position': 'absolute',
        'bottom': offset,
        'left': '50%',
        'transform': 'translateX(-50%)',
      }
    }

    case 'bottomLeft': {
      return {
        'position': 'absolute',
        'bottom': offset,
        'left': offset,
      }
    }

    case 'left': {
      return {
        'position': 'absolute',
        'top': '50%',
        'left': offset,
        'transform': 'translateY(-50%)',
      }
    }

    case 'topLeft': {
      return {
        'position': 'absolute',
        'top': offset,
        'left': offset,
      }
    }

    default: throw new Error('align expects one of "center", "horizontal", "vertical", "top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left", "topLeft" as the first argument.')
  }
}

function align(position: string, offset: string = '0') {
  return getAlignProperties({ position, offset })
}

export default align
