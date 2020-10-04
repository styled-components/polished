// @flow

import hslToRgb from '../_hslToRgb'

describe('hslToRgb', () => {
  it('should convert numbers to a hex color', () => {
    expect({ background: `rgb(${hslToRgb(360, 0.75, 0.4)})` }).toEqual({
      background: 'rgb(179,25,25)',
    })
  })

  it('should convert the color red', () => {
    expect({ background: `rgb(${hslToRgb(0, 1, 0.5)})` }).toEqual({
      background: 'rgb(255,0,0)',
    })
  })

  it('should convert the color yellow', () => {
    expect({ background: `rgb(${hslToRgb(60, 1, 0.5)})` }).toEqual({
      background: 'rgb(255,255,0)',
    })
  })

  it('should convert the color lime', () => {
    expect({ background: `rgb(${hslToRgb(120, 1, 0.5)})` }).toEqual({
      background: 'rgb(0,255,0)',
    })
  })

  it('should convert the color cyan', () => {
    expect({ background: `rgb(${hslToRgb(180, 1, 0.5)})` }).toEqual({
      background: 'rgb(0,255,255)',
    })
  })

  it('should convert the color blue', () => {
    expect({ background: `rgb(${hslToRgb(240, 1, 0.5)})` }).toEqual({
      background: 'rgb(0,0,255)',
    })
  })

  it('should convert the color magenta', () => {
    expect({ background: `rgb(${hslToRgb(300, 1, 0.5)})` }).toEqual({
      background: 'rgb(255,0,255)',
    })
  })

  it('should convert black', () => {
    expect({ background: `rgb(${hslToRgb(360, 0, 0.4)})` }).toEqual({
      background: 'rgb(102,102,102)',
    })
  })

  it('should convert correctly even when passed a "faulty" negative hue', () => {
    expect({ background: `rgb(${hslToRgb(-10, 1, 0.5)})` }).toEqual({
      background: 'rgb(255,0,43)',
    })
    expect({ background: `rgb(${hslToRgb(-100, 1, 0.5)})` }).toEqual({
      background: 'rgb(85,0,255)',
    })
    expect({ background: `rgb(${hslToRgb(-1000, 1, 0.5)})` }).toEqual({
      background: 'rgb(170,255,0)',
    })
  })
})
