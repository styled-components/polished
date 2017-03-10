// @flow
import align from '../align'

describe('align', () => {
  it('should align object to center without offset', () => {
    expect({ ...align('center') }).toMatchSnapshot()
  })

  it('should not allow when doesnt have parameter', () => {
    expect(() => { align() }).toThrow()
  })

  it('should not allow when first parameter is not one of type', () => {
    expect(() => { align('wrongPosition') }).toThrow()
  })

  it('should align object to center with -10px offset', () => {
    expect({ ...align('center', '-10px') }).toMatchSnapshot()
  })

  it('should align object vertically', () => {
    expect({ ...align('vertical') }).toMatchSnapshot()
  })

  it('should align object horizontally', () => {
    expect({ ...align('horizontal') }).toMatchSnapshot()
  })

  it('should align object to top with 1rem offset', () => {
    expect({ ...align('top', '1rem') }).toMatchSnapshot()
  })

  it('should align object to topRight corner with -15px offset', () => {
    expect({ ...align('topRight', '-15px') }).toMatchSnapshot()
  })

  it('should align object to right', () => {
    expect({ ...align('right') }).toMatchSnapshot()
  })

  it('should align object to bottom right corner', () => {
    expect({ ...align('bottomRight') }).toMatchSnapshot()
  })

  it('should align object to bottom', () => {
    expect({ ...align('bottom') }).toMatchSnapshot()
  })

  it('should align object to bottom left corner', () => {
    expect({ ...align('bottomLeft') }).toMatchSnapshot()
  })

  it('should align object to left with -10px offset', () => {
    expect({ ...align('left', '-10px') }).toMatchSnapshot()
  })

  it('should align object to top left corner with -10px offset', () => {
    expect({ ...align('topLeft', '-10px') }).toMatchSnapshot()
  })
})
