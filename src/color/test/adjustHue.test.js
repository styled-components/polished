// @flow
import adjustHue from '../adjustHue'

describe('adjustHue', () => {
  it('should adjustHue of a reduced hex color', () => {
    expect(adjustHue(20, '#448')).toEqual('#5b4488')
  })

  it('should adjustHue of a hex color', () => {
    expect(adjustHue(20, '#CCCD64')).toEqual('#a9cd64')
  })

  it('should adjustHue of an 8-digit hex color', () => {
    expect(adjustHue(20, '#6564CDB3')).toEqual('rgba(136,100,205,0.7)')
  })

  it('should adjustHue of an 4-digit hex color', () => {
    expect(adjustHue(20, '#0f08')).toEqual('rgba(0,255,85,0.53)')
  })

  it('should adjustHue of a color with opacity', () => {
    expect(adjustHue(20, 'rgba(101,100,205,0.7)')).toEqual('rgba(136,100,205,0.7)')
  })

  it('should adjustHue of a color and not go beyond 360', () => {
    expect(adjustHue(350, '#448')).toEqual('#444f88')
  })

  it('should adjustHue when passed a string for adjustment', () => {
    expect(adjustHue('20', '#448')).toEqual('#5b4488')
  })

  it('should return transparent when passed transparent', () => {
    expect(adjustHue('20', 'transparent')).toEqual('transparent')
  })
})
