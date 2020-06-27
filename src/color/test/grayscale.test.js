// @flow
import grayscale from '../grayscale'

describe('grayscale', () => {
  it('should grayscale a reduced hex color', () => {
    expect(grayscale('#444')).toEqual('#444')
  })

  it('should grayscale a hex color', () => {
    expect(grayscale('#CCCD64')).toEqual('#999')
  })

  it('should grayscale an 8-digit hex color', () => {
    expect(grayscale('#6564CDB3')).toEqual('rgba(153,153,153,0.7)')
  })

  it('should grayscale an 4-digit hex color', () => {
    expect(grayscale('#0f08')).toEqual('rgba(128,128,128,0.53)')
  })

  it('should grayscale a color with opacity', () => {
    expect(grayscale('rgba(101,100,205,0.7)')).toEqual('rgba(153,153,153,0.7)')
  })

  it('should return transparent when passed transparent', () => {
    expect(grayscale('transparent')).toEqual('transparent')
  })
})
