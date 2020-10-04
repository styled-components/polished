// @flow
import lighten from '../lighten'

describe('lighten', () => {
  it('should lighten a color by 10%', () => {
    expect(lighten(0.1, '#444')).toEqual('#5e5e5e')
  })

  it('should lighten a hex color by 20%', () => {
    expect(lighten(0.2, '#CCCD64')).toEqual('#e5e6b1')
  })

  it('should lighten an 8-digit hex color by 20%', () => {
    expect(lighten(0.2, '#6564CDB3')).toEqual('rgba(178,177,230,0.7)')
  })

  it('should lighten an 4-digit hex color by 20%', () => {
    expect(lighten(0.2, '#0f08')).toEqual('rgba(102,255,102,0.53)')
  })

  it('should lighten a color with opacity by 20%', () => {
    expect(lighten(0.2, 'rgba(101,100,205,0.7)')).toEqual('rgba(178,177,230,0.7)')
  })

  it('should lighten a color but not go beyond 255', () => {
    expect(lighten(0.8, 'rgba(255,200,200,0.7)')).toEqual('rgba(255,255,255,0.7)')
  })

  it('should lighten a color when passed a string for amount', () => {
    expect(lighten('0.1', '#444')).toEqual('#5e5e5e')
  })

  it('should return transparent when passed transparent', () => {
    expect(lighten('0.1', 'transparent')).toEqual('transparent')
  })
})
