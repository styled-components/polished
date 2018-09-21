// @flow
import adjustHue from '../adjustHue'

describe('adjustHue', () => {
  it('should adjustHue of a reduced hex color', () => {
    expect(adjustHue(20, '#448')).toMatchSnapshot()
  })

  it('should adjustHue of a hex color', () => {
    expect(adjustHue(20, '#CCCD64')).toMatchSnapshot()
  })

  it('should adjustHue of an 8-digit hex color', () => {
    expect(adjustHue(20, '#6564CDB3')).toMatchSnapshot()
  })

  it('should adjustHue of an 4-digit hex color', () => {
    expect(adjustHue(20, '#0f08')).toMatchSnapshot()
  })

  it('should adjustHue of a color with opacity', () => {
    expect(adjustHue(20, 'rgba(101,100,205,0.7)')).toMatchSnapshot()
  })

  it('should adjustHue of a color and not go beyond 360', () => {
    expect(adjustHue(350, '#448')).toMatchSnapshot()
  })

  it('should adjustHue when passed a string for adjustment', () => {
    expect(adjustHue('20', '#448')).toMatchSnapshot()
  })
})
