// @flow
import complement from '../complement'

describe('complement', () => {
  it('should return the complement of a reduced hex color', () => {
    expect(complement('#448')).toMatchSnapshot()
  })

  it('should return the complement of a hex color', () => {
    expect(complement('#CCCD64')).toMatchSnapshot()
  })

  it('should return the complement of an 8-digit hex color', () => {
    expect(complement('#6564CDB3')).toMatchSnapshot()
  })

  it('should return the complement of an 4-digit hex color', () => {
    expect(complement('#0f08')).toMatchSnapshot()
  })

  it('should return the complement of a color with opacity', () => {
    expect(complement('rgba(101,100,205,0.7)')).toMatchSnapshot()
  })

  it('should return transparent when passed transparent', () => {
    expect(complement('transparent')).toMatchSnapshot()
  })
})
