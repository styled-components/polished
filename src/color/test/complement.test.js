// @flow
import complement from '../complement'

describe('complement', () => {
  it('should return the complement of a reduced hex color', () => {
    expect(complement('#448')).toEqual('#884')
  })

  it('should return the complement of a hex color', () => {
    expect(complement('#CCCD64')).toEqual('#6564cd')
  })

  it('should return the complement of an 8-digit hex color', () => {
    expect(complement('#6564CDB3')).toEqual('rgba(204,205,100,0.7)')
  })

  it('should return the complement of an 4-digit hex color', () => {
    expect(complement('#0f08')).toEqual('rgba(255,0,255,0.53)')
  })

  it('should return the complement of a color with opacity', () => {
    expect(complement('rgba(101,100,205,0.7)')).toEqual('rgba(204,205,100,0.7)')
  })

  it('should return transparent when passed transparent', () => {
    expect(complement('transparent')).toEqual('transparent')
  })
})
