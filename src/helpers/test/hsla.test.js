// @flow
import hsla from '../hsla'

describe('hsla', () => {
  it('should convert numbers to a rgba color', () => {
    expect({ background: hsla(360, 0.75, 0.4, 0.5) }).toMatchSnapshot()
  })

  it('should convert numbers to a hex color', () => {
    expect({ background: hsla(360, 0.75, 0.4, 1) }).toMatchSnapshot()
  })

  it('should convert a hlsa object to a rgba color', () => {
    expect({ background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.5 }) }).toMatchSnapshot()
  })

  it('should convert a hlsa object to a hex color', () => {
    expect({ background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 1 }) }).toMatchSnapshot()
  })

  it('should convert to a reduce hex value if possible', () => {
    expect({ background: hsla(360, 1, 0.4, 1) }).toMatchSnapshot()
  })

  it('should throw an error if an object and multiple arguments are passed', () => {
    expect(() => ({ background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 1 }, 250, 100, 1) }))
      .toThrow('Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).')
  })
})
