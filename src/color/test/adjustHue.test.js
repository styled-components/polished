// @flow
import adjustHue from '../adjustHue'

describe('adjustHue', () => {
  it('should adjustHue of a reduced hex color', () => {
    expect(adjustHue(20, '#448')).toMatchSnapshot()
  })

  it('should adjustHue of a hex color', () => {
    expect(adjustHue(20, '#CCCD64')).toMatchSnapshot()
  })

  it('should adjustHue of a color with opacity', () => {
    expect(adjustHue(20, 'rgba(101,100,205,0.7)')).toMatchSnapshot()
  })

  it('should adjustHue of a color and not go beyond 360', () => {
    expect(adjustHue(350, '#448')).toMatchSnapshot()
  })
})
