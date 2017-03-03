// @flow
import invert from '../invert'

describe('invert', () => {
  it('should invert a reduced hex color', () => {
    expect(invert('#448')).toMatchSnapshot()
  })

  it('should invert a hex color', () => {
    expect(invert('#CCCD64')).toMatchSnapshot()
  })

  it('should invert a color with opacity', () => {
    expect(invert('rgba(101,100,205,0.7)')).toMatchSnapshot()
  })
})
