// @flow
import desaturate from '../desaturate'

describe('desaturate', () => {
  it('should desaturate a reduced hex color by 10%', () => {
    expect(desaturate(0.1, '#444')).toEqual('#444')
  })

  it('should desaturate a hex color by 20%', () => {
    expect(desaturate(0.2, '#CCCD64')).toEqual('#b8b979')
  })

  it('should desaturate an 8-digit hex color by 20%', () => {
    expect(desaturate(0.2, '#6564CDB3')).toEqual('rgba(121,121,185,0.7)')
  })

  it('should desaturate an 4-digit hex color by 20%', () => {
    expect(desaturate(0.2, '#0f08')).toEqual('rgba(25,230,25,0.53)')
  })

  it('should desaturate a color with opacity by 20%', () => {
    expect(desaturate(0.2, 'rgba(101,100,205,0.7)')).toEqual('rgba(121,121,185,0.7)')
  })

  it('should desaturate a color but not go below 0', () => {
    expect(desaturate(0.8, 'rgba(40,20,10,0.7)')).toEqual('rgba(25,25,25,0.7)')
  })

  it('should return transparent when passed transparent', () => {
    expect(desaturate(0.8, 'transparent')).toEqual('transparent')
  })
})
