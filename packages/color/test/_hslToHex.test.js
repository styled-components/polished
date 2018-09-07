// @flow

import hslToHex from '../_hslToHex'

describe('hslToHex', () => {
  it('should convert numbers to a hex color', () => {
    expect({ background: hslToHex(360, 0.75, 0.4) }).toMatchSnapshot()
  })

  it('should convert the color red', () => {
    expect({ background: hslToHex(0, 1, 0.5) }).toMatchSnapshot()
  })

  it('should convert the color yellow', () => {
    expect({ background: hslToHex(60, 1, 0.5) }).toMatchSnapshot()
  })

  it('should convert the color lime', () => {
    expect({ background: hslToHex(120, 1, 0.5) }).toMatchSnapshot()
  })

  it('should convert the color cyan', () => {
    expect({ background: hslToHex(180, 1, 0.5) }).toMatchSnapshot()
  })

  it('should convert the color blue', () => {
    expect({ background: hslToHex(240, 1, 0.5) }).toMatchSnapshot()
  })

  it('should convert the color magenta', () => {
    expect({ background: hslToHex(300, 1, 0.5) }).toMatchSnapshot()
  })

  it('should convert black', () => {
    expect({ background: hslToHex(360, 0, 0.4) }).toMatchSnapshot()
  })
})
