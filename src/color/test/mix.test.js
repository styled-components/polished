// @flow
import mix from '../mix'

describe('mix', () => {
  it('should mix two colors with by a weight of 25%', () => {
    expect(mix(0.25, '#f00', '#00f')).toEqual('#3f00bf')
  })

  it('should mix a color with an 8-digit hex color', () => {
    expect(mix(0.5, '#FF00007F', '#00f')).toEqual('rgba(63,0,191,0.75)')
  })

  it('should mix a 8-digit hex color with a 4-digit hex color', () => {
    expect(mix(0.5, '#FF00007F', '#0f08')).toEqual('rgba(123,131,0,0.515)')
  })

  it('should mix a color with a color with an opacity lower than 1', () => {
    expect(mix(0.51, 'rgba(242, 236, 228, 0.5)', '#6b717f')).toEqual('rgba(141,144,153,0.745)')
  })

  it('should mix two rgba colors', () => {
    expect(mix(0.7, 'rgba(0, 0, 0, 1)', 'rgba(255, 255, 255, 0)')).toEqual('rgba(0,0,0,0.7)')
  })

  it('should mix two colors when weight is a string', () => {
    expect(mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')).toEqual('rgba(63,0,191,0.75)')
  })

  it('should return otherColor when passed transparent color', () => {
    expect(mix('0.5', 'transparent', '#00f')).toEqual('#00f')
  })

  it('should return color when passed transparent otherColor', () => {
    expect(mix('0.5', 'rgba(255, 0, 0, 0.5)', 'transparent')).toEqual('rgba(255, 0, 0, 0.5)')
  })

  it('should return transparent when passed transparent for both colors', () => {
    expect(mix('0.5', 'transparent', 'transparent')).toEqual('transparent')
  })

  it('should return the second color when weight is 0', () => {
    expect(mix(0, 'rgba(0, 0, 0, 1)', 'rgba(255, 255, 255, 0)')).toEqual('rgba(255, 255, 255, 0)')
  })
})
