// @flow
import hsl from '../hsl'

describe('hsl', () => {
  it('should convert numbers to a hex color', () => {
    expect({ background: hsl(360, 0.75, 0.4) }).toMatchSnapshot()
  })

  it('should convert the color red', () => {
    expect({ background: hsl(0, 1, 0.5) }).toMatchSnapshot()
  })

  it('should convert the color yellow', () => {
    expect({ background: hsl(60, 1, 0.5) }).toMatchSnapshot()
  })

  it('should convert the color lime', () => {
    expect({ background: hsl(120, 1, 0.5) }).toMatchSnapshot()
  })

  it('should convert the color cyan', () => {
    expect({ background: hsl(180, 1, 0.5) }).toMatchSnapshot()
  })

  it('should convert the color blue', () => {
    expect({ background: hsl(240, 1, 0.5) }).toMatchSnapshot()
  })

  it('should convert the color magenta', () => {
    expect({ background: hsl(300, 1, 0.5) }).toMatchSnapshot()
  })

  it('should convert black', () => {
    expect({ background: hsl({ hue: 360, saturation: 0, lightness: 0.4 }) }).toMatchSnapshot()
  })

  it('should convert a hls object to a hex color', () => {
    expect({ background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }) }).toMatchSnapshot()
  })

  it('should convert to a reduce hex value if possible', () => {
    expect({ background: hsl(360, 1, 0.4) }).toMatchSnapshot()
  })

  it('should throw an error if an object and multiple arguments are passed', () => {
    expect(() => ({ background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }, 250, 100) }))
      .toThrow('Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).')
  })
})
