// @flow
import hexToRgb from '../_hexToRgb'

describe('transparentize', () => {
  it('it should correctly convert hex #fff to rgb', () => {
    expect(hexToRgb('#fff')).toMatchSnapshot()
  })
  it('it should correctly convert hex #000000 to rgb', () => {
    expect(hexToRgb('#000000')).toMatchSnapshot()
  })
  // it('it should throw an error on invalid color #00000', () => {
  //   expect(() => { hexToRgb('#00000') }).toThrow('Invalid hex color')
  // })
})
