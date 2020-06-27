// @flow
import toColorString from '../toColorString'

describe('toColorString', () => {
  it('should convert a RgbColor to a reduced hex string', () => {
    expect({
      background: toColorString({ red: 255, green: 255, blue: 255 }),
    }).toEqual({
      background: '#fff',
    })
  })

  it('should convert a RgbColor to a hex string', () => {
    expect({
      background: toColorString({ red: 255, green: 205, blue: 100 }),
    }).toEqual({
      background: '#ffcd64',
    })
  })

  it('should convert a RgbaColor to a rgba string', () => {
    expect({
      background: toColorString({
        red: 255,
        green: 205,
        blue: 100,
        alpha: 0.72,
      }),
    }).toEqual({
      background: 'rgba(255,205,100,0.72)',
    })
  })

  it('should convert a HslColor to a reduced hex string', () => {
    expect({
      background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
    }).toEqual({
      background: '#00f',
    })
  })

  it('should convert a HslColor to a hex string', () => {
    expect({
      background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4 }),
    }).toEqual({
      background: '#b31919',
    })
  })

  it('should convert a HslaColor to a rgba string', () => {
    expect({
      background: toColorString({
        hue: 360,
        saturation: 0.75,
        lightness: 0.4,
        alpha: 0.72,
      }),
    }).toEqual({
      background: 'rgba(179,25,25,0.72)',
    })
  })

  it('should throw an error if anything else than a RgbColor, RgbaColor, HslColor or HslaColor is provided', () => {
    expect(() => toColorString({ red: 255, green: 1, hue: 240 })).toThrow(
      'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.',
    )
  })
})
