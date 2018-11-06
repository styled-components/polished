function pxNum(value: string | number): string {
  return typeof value === 'number' ? `${value}px` : value
}

/**
 * Returns a media query according to provided arguments
 *
 * @example
 * // styled-components usage
 * const div = styled.div`
 *   width: 100%;
 *   ${media({ minWidth: "900px" })} {
 *     width: 50%;
 *   }
 *   ${media({ minWidth: "1200px" })} {
 *      width: 33.33%;
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   "width": "100%",
 *   "@media (min-width: 900px)": Object {
 *     "width": "50%",
 *   },
 *   "@media (min-width: 1200px)": Object {
 *     "width": "33.33%",
 *   },
 * }
 */

function media(query: string | Object): string {
  if (typeof query === 'string') {
    return `@media ${query}`
  }

  if (typeof query !== 'object') {
    throw new Error('Property must be an object or string')
  }

  const { type, minWidth, maxWidth } = query
  const minWidthStr = minWidth ? `(min-width: ${pxNum(minWidth)})` : undefined
  const maxWidthStr = maxWidth ? `(max-width: ${pxNum(maxWidth)})` : undefined

  const queryStr = [type, minWidthStr, maxWidthStr].filter(x => x).join(' and ')

  return `@media ${queryStr}`
}

export default media
