// @flow

import rgbToHsl from '../_rgbToHsl'

describe('hslToHex', () => {
  it('should convert the color red', () => {
    expect({ background: rgbToHsl(255, 0, 0) }).toMatchSnapshot()
  })

  it('should convert the color blue', () => {
    expect({ background: rgbToHsl(0, 0, 255) }).toMatchSnapshot()
  })

  it('should convert the color green', () => {
    expect({ background: rgbToHsl(0, 255, 0) }).toMatchSnapshot()
  })

  it('should convert black', () => {
    expect({ background: rgbToHsl(0, 0, 0) }).toMatchSnapshot()
  })
})
