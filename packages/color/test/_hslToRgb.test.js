// @flow

import hslToRgb from '../_hslToRgb'

describe('hslToRgb', () => {
  it('should convert numbers to a hex color', () => {
    expect({ background: `rgb(${hslToRgb(360, 0.75, 0.4)})` }).toMatchSnapshot()
  })

  it('should convert the color red', () => {
    expect({ background: `rgb(${hslToRgb(0, 1, 0.5)})` }).toMatchSnapshot()
  })

  it('should convert the color yellow', () => {
    expect({ background: `rgb(${hslToRgb(60, 1, 0.5)})` }).toMatchSnapshot()
  })

  it('should convert the color lime', () => {
    expect({ background: `rgb(${hslToRgb(120, 1, 0.5)})` }).toMatchSnapshot()
  })

  it('should convert the color cyan', () => {
    expect({ background: `rgb(${hslToRgb(180, 1, 0.5)})` }).toMatchSnapshot()
  })

  it('should convert the color blue', () => {
    expect({ background: `rgb(${hslToRgb(240, 1, 0.5)})` }).toMatchSnapshot()
  })

  it('should convert the color magenta', () => {
    expect({ background: `rgb(${hslToRgb(300, 1, 0.5)})` }).toMatchSnapshot()
  })

  it('should convert black', () => {
    expect({ background: `rgb(${hslToRgb(360, 0, 0.4)})` }).toMatchSnapshot()
  })
})
