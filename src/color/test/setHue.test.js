// @flow
import setHue from '../setHue'

describe('setHue', () => {
  it('should update the hue and return a hex color', () => {
    expect(setHue(42, '#CCCD64')).toMatchSnapshot()
  })

  it('should update the hue of an 8-digit hex color and return a hex color', () => {
    expect(setHue(244, '#6564CDB3')).toMatchSnapshot()
  })

  it('should update the hue and return a color with opacity', () => {
    expect(setHue(244, 'rgba(101,100,205,0.7)')).toMatchSnapshot()
  })

  it('should update the hue when passed a string for hue', () => {
    expect(setHue('42', '#CCCD64')).toMatchSnapshot()
  })
})
