// @flow
import hslToColorString from '../hslToColorString'

describe('hslToColorString', () => {
  it('should convert a HslColor to a reduced hex string', () => {
    expect({
      background: hslToColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
    }).toMatchSnapshot()
  })

  it('should convert a HslColor to a hex string', () => {
    expect({
      background: hslToColorString({ hue: 360, saturation: 0.75, lightness: 0.4 }),
    }).toMatchSnapshot()
  })

  it('should convert a HslaColor to a rgba string', () => {
    expect({
      background: hslToColorString({
        hue: 360,
        saturation: 0.75,
        lightness: 0.4,
        alpha: 0.72,
      }),
    }).toMatchSnapshot()
  })

  it('should throw an error if anything else than a HslColor or HslaColor is provided', () => {
    // $FlowIgnoreNextLine since the coming is invalid code, flow complains
    expect(() => hslToColorString({ red: 255, green: 1, hue: 240 })).toThrow(
      'Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.',
    )
  })
})
