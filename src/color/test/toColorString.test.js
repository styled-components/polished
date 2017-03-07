// @flow
import toColorString from '../toColorString'

describe('toColorString', () => {
  it('should convert a RgbColor to a reduced hex string', () => {
    expect({
      background: toColorString({ red: 255, green: 255, blue: 255 }),
    }).toMatchSnapshot()
  })

  it('should convert a RgbColor to a hex string', () => {
    expect({
      background: toColorString({ red: 255, green: 205, blue: 100 }),
    }).toMatchSnapshot()
  })

  it('should convert a RgbaColor to a rgba string', () => {
    expect({
      background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
    }).toMatchSnapshot()
  })

  it('should convert a HslColor to a reduced hex string', () => {
    expect({
      background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
    }).toMatchSnapshot()
  })

  it('should convert a HslColor to a hex string', () => {
    expect({
      background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4 }),
    }).toMatchSnapshot()
  })

  it('should convert a HslaColor to a rgba string', () => {
    expect({
      background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
    }).toMatchSnapshot()
  })

  it('should throw an error if anything else than a RgbColor, RgbaColor, HslColor or HslaColor is provided', () => {
    // $FlowIgnoreNextLine since the coming is invalid code, flow complains
    expect(() => toColorString({ red: 255, green: 1, hue: 240 }))
      .toThrow('Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.')
  })
})
