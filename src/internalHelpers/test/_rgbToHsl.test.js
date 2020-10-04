// @flow

import rgbToHsl from '../_rgbToHsl'

describe('hslToHex', () => {
  it('should convert the color red', () => {
    expect({
      background: rgbToHsl({ red: 255, green: 0, blue: 0 }),
    }).toEqual({
      background: {
        hue: 0,
        lightness: 0.5,
        saturation: 1,
      },
    })
  })

  it('should convert the color blue', () => {
    expect({
      background: rgbToHsl({ red: 0, green: 0, blue: 255 }),
    }).toEqual({
      background: {
        hue: 240,
        lightness: 0.5,
        saturation: 1,
      },
    })
  })

  it('should convert the color green', () => {
    expect({
      background: rgbToHsl({ red: 0, green: 255, blue: 0 }),
    }).toEqual({
      background: {
        hue: 120,
        lightness: 0.5,
        saturation: 1,
      },
    })
  })

  it('should convert black', () => {
    expect({
      background: rgbToHsl({ red: 0, green: 0, blue: 0 }),
    }).toEqual({
      background: {
        hue: 0,
        lightness: 0,
        saturation: 0,
      },
    })
  })

  it('should convert the color red with a transparency of 0.6', () => {
    expect({
      background: rgbToHsl({
        red: 255,
        green: 0,
        blue: 0,
        alpha: 0.5,
      }),
    }).toEqual({
      background: {
        alpha: 0.5,
        hue: 0,
        lightness: 0.5,
        saturation: 1,
      },
    })
  })

  it('should convert black with a transparency of 0.6', () => {
    expect({
      background: rgbToHsl({
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0.5,
      }),
    }).toEqual({
      background: {
        alpha: 0.5,
        hue: 0,
        lightness: 0,
        saturation: 0,
      },
    })
  })
})
