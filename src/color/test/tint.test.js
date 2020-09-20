// @flow
import tint from '../tint'

describe('test', () => {
  it('should tint the provided color with white by the given percentage', () => {
    expect(tint(0.25, '#00f')).toEqual('#3f3fff')
  })

  it('should tint the provided 8-digit hex color with white by the given percentage', () => {
    expect(tint(0.25, '#000fffcc')).toEqual('rgba(85,95,255,0.8500000000000001)')
  })

  it('should tint the provided 4-digit hex color with white by the given percentage', () => {
    expect(tint(0.25, '#0f08')).toEqual('rgba(122,255,122,0.6475)')
  })

  it('should tint the provided color when passed a string for amount', () => {
    expect(tint('0.25', '#00f')).toEqual('#3f3fff')
  })

  it('should return transparent when passed transparent', () => {
    expect(tint('0.25', 'transparent')).toEqual('transparent')
  })
})
