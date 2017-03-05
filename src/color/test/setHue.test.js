// @flow
import setHue from '../setHue'

describe('setHue', () => {
  it('should update the hue and return a hex color', () => {
    expect(setHue(42, '#CCCD64')).toMatchSnapshot()
  })

  it('should update the hue and return a color with opacity', () => {
    expect(setHue(244, 'rgba(204,205,100,0.7)')).toMatchSnapshot()
  })
})
