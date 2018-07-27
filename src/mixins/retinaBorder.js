// @flow

type Direction = 'top' | 'right' | 'bottom' | 'left'

interface BorderStyles {
  content: '""';
  position: 'absolute';
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  transformOrigin?: string;
  transform?: string;
  boxSizing?: 'border-box';
}

/**
 * 1px border for Retina screen.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   position: 'relative',
 *   '&::after': {
 *     ...retinaBorder(),
 *   },
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   position: relative;
 *   &::after {
 *     ${retinaBorder()}
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   position: 'relative',
 *   '&::after': {
 *     content: '""',
 *     position: 'absolute',
 *     top: 0,
 *     left: 0,
 *     width: '200%',
 *     height: '200%',
 *     border: '1px solid #c7c7c7',
 *     transformOrigin: '0 0',
 *     transform: 'scale(0.5)',
 *     boxSizing: 'border-box',
 *   }
 * }
 */

function retinaBorder(
  color?: string = '#c7c7c7',
  direction?: Direction,
): Object {
  const styles: BorderStyles = {
    content: '""',
    position: 'absolute',
  }

  switch (direction) {
    case 'top':
      Object.assign(styles, {
        top: 0,
        right: 0,
        left: 0,
        height: '1px',
        borderTop: `1px solid ${color}`,
        transformOrigin: '0 0',
        transform: 'scaleY(0.5)',
      })
      break
    case 'right':
      Object.assign(styles, {
        top: 0,
        right: 0,
        bottom: 0,
        width: '1px',
        borderRight: `1px solid ${color}`,
        transformOrigin: '100% 0',
        transform: 'scaleX(0.5)',
      })
      break
    case 'bottom':
      Object.assign(styles, {
        right: 0,
        bottom: 0,
        left: 0,
        height: '1px',
        borderBottom: `1px solid ${color}`,
        transformOrigin: '0 100%',
        transform: 'scaleY(0.5)',
      })
      break
    case 'left':
      Object.assign(styles, {
        top: 0,
        bottom: 0,
        left: 0,
        width: '1px',
        borderLeft: `1px solid ${color}`,
        transformOrigin: '0 0',
        transform: 'scaleX(0.5)',
      })
      break
    default:
      Object.assign(styles, {
        top: 0,
        left: 0,
        width: '200%',
        height: '200%',
        border: `1px solid ${color}`,
        transformOrigin: '0 0',
        transform: 'scale(0.5)',
        boxSizing: 'border-box',
      })
      break
  }

  return styles
}

export default retinaBorder
