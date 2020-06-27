// @flow
import invert from '../invert'

describe('invert', () => {
  it('should invert a reduced hex color', () => {
    expect(invert('#448')).toEqual('#bb7')
  })

  it('should invert a hex color', () => {
    expect(invert('#CCCD64')).toEqual('#33329b')
  })

  it('should invert an 8-digit hex color', () => {
    expect(invert('#6564CDB3')).toEqual('rgba(154,155,50,0.7)')
  })

  it('should invert an 4-digit hex color', () => {
    expect(invert('#0f08')).toEqual('rgba(255,0,255,0.53)')
  })

  it('should invert a color with opacity', () => {
    expect(invert('rgba(101,100,205,0.7)')).toEqual('rgba(154,155,50,0.7)')
  })

  it('should return transparent when passed transparent', () => {
    expect(invert('transparent')).toEqual('transparent')
  })
})
