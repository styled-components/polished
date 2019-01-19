// @flow
import invert from '../invert'

describe('invert', () => {
  it('should invert a reduced hex color', () => {
    expect(invert('#448')).toMatchSnapshot()
  })

  it('should invert a hex color', () => {
    expect(invert('#CCCD64')).toMatchSnapshot()
  })

  it('should invert an 8-digit hex color', () => {
    expect(invert('#6564CDB3')).toMatchSnapshot()
  })

  it('should invert an 4-digit hex color', () => {
    expect(invert('#0f08')).toMatchSnapshot()
  })

  it('should invert a color with opacity', () => {
    expect(invert('rgba(101,100,205,0.7)')).toMatchSnapshot()
  })

  it('should return transparent when passed transparent', () => {
    expect(invert('transparent')).toMatchSnapshot()
  })
})
