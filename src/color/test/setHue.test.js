// @flow
import setHue from '../setHue'

describe('setHue', () => {
  it('should update the hue and return a hex color', () => {
    expect(setHue(42, '#CCCD64')).toEqual('#cdae64')
  })

  it('should update the hue of an 8-digit hex color and return a hex color', () => {
    expect(setHue(244, '#6564CDB3')).toEqual('rgba(107,100,205,0.7)')
  })

  it('should update the hue of an 4-digit hex color and return a hex color', () => {
    expect(setHue(244, '#0f08')).toEqual('rgba(17,0,255,0.53)')
  })

  it('should update the hue and return a color with opacity', () => {
    expect(setHue(244, 'rgba(101,100,205,0.7)')).toEqual('rgba(107,100,205,0.7)')
  })

  it('should update the hue when passed a string for hue', () => {
    expect(setHue('42', '#CCCD64')).toEqual('#cdae64')
  })

  it('should return transparent when passed transparent', () => {
    expect(setHue('42', 'transparent')).toEqual('transparent')
  })
})
