// @flow
import grayscale from '../src/grayscale'

describe('grayscale', () => {
  it('should grayscale a reduced hex color', () => {
    expect(grayscale('#444')).toMatchSnapshot()
  })

  it('should grayscale a hex color', () => {
    expect(grayscale('#CCCD64')).toMatchSnapshot()
  })

  it('should grayscale an 8-digit hex color', () => {
    expect(grayscale('#6564CDB3')).toMatchSnapshot()
  })

  it('should grayscale a color with opacity', () => {
    expect(grayscale('rgba(101,100,205,0.7)')).toMatchSnapshot()
  })
})
