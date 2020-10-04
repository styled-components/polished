// @flow
import shade from '../shade'

describe('shade', () => {
  it('should shade the provided color with white by the given percentage', () => {
    expect(shade(0.25, '#00f')).toEqual('#0000bf')
  })

  it('should shade the provided 8-digit hex color with white by the given percentage', () => {
    expect(shade(0.25, '#000fffcc')).toEqual('rgba(0,10,170,0.8500000000000001)')
  })

  it('should shade the provided 4-digit hex color with white by the given percentage', () => {
    expect(shade(0.25, '#0f08')).toEqual('rgba(0,132,0,0.6475)')
  })

  it('should shade the provided color when passed a string for amount', () => {
    expect(shade('0.25', '#00f')).toEqual('#0000bf')
  })

  it('should return transparent when passed transparent', () => {
    expect(shade('0.25', 'transparent')).toEqual('transparent')
  })
})
