// @flow
import rgbToColorString from '../rgbToColorString'

describe('rgbToColorString', () => {
  it('should convert a RgbColor to a reduced hex string', () => {
    expect({
      background: rgbToColorString({ red: 255, green: 255, blue: 255 }),
    }).toMatchSnapshot()
  })

  it('should convert a RgbColor to a hex string', () => {
    expect({
      background: rgbToColorString({ red: 255, green: 205, blue: 100 }),
    }).toMatchSnapshot()
  })

  it('should convert a RgbaColor to a rgba string', () => {
    expect({
      background: rgbToColorString({
        red: 255,
        green: 205,
        blue: 100,
        alpha: 0.72,
      }),
    }).toMatchSnapshot()
  })

  it('should throw an error if anything else than a RgbColor or RgbaColor is provided', () => {
    // $FlowFixMe
    expect(() => rgbToColorString({ red: 255, green: 1, hue: 240 })).toThrow(
      'Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.',
    )
  })
})
