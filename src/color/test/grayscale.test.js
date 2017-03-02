// @flow
import grayscale from '../grayscale'

describe('grayscale', () => {
  it('should grayscale a reduced hex color', () => {
    expect(grayscale('#444')).toMatchSnapshot()
  })

  it('should grayscale a hex color', () => {
    expect(grayscale('#CCCD64')).toMatchSnapshot()
  })

  it('should grayscale a color with opacity', () => {
    expect(grayscale('rgba(204,205,100,0.7)')).toMatchSnapshot()
  })
})
