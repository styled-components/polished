// @flow
import setLightness from '../setLightness'

describe('setLightness', () => {
  it('should update the lightness and return a hex color', () => {
    expect(setLightness(0.2, '#CCCD64')).toEqual('#4d4d19')
  })

  it('should update the lightness of an 8-digit hex color and return a hex color', () => {
    expect(setLightness(0.2, '#6564CDB3')).toEqual('rgba(25,25,77,0.7)')
  })

  it('should update the lightness of an 4-digit hex color and return a hex color', () => {
    expect(setLightness(0.2, '#0f08')).toEqual('rgba(0,102,0,0.53)')
  })

  it('should update the lightness and return a color with opacity', () => {
    expect(setLightness(0.2, 'rgba(101,100,205,0.7)')).toEqual('rgba(25,25,77,0.7)')
  })

  it('should update the lightness when passed a string', () => {
    expect(setLightness('0.2', '#CCCD64')).toEqual('#4d4d19')
  })

  it('should return transparent when passed transparent', () => {
    expect(setLightness('0.2', 'transparent')).toEqual('transparent')
  })
})
