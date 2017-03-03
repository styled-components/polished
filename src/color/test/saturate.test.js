// @flow
import saturate from '../saturate'

describe('saturate', () => {
  it('should saturate a color by 10%', () => {
    expect(saturate(0.1, '#444')).toMatchSnapshot()
  })

  it('should saturate a hex color by 20%', () => {
    expect(saturate(0.2, '#CCCD64')).toMatchSnapshot()
  })

  it('should saturate a color with opacity by 20%', () => {
    expect(saturate(0.2, 'rgba(204,205,100,0.7)')).toMatchSnapshot()
  })

  it('should saturate a color but not go beyond 255', () => {
    expect(saturate(0.8, 'rgba(255,200,200,0.7)')).toMatchSnapshot()
  })
})
