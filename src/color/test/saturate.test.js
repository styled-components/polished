// @flow
import saturate from '../saturate'

describe('saturate', () => {
  it('should saturate a color by 10%', () => {
    expect(saturate(0.1, '#444')).toMatchSnapshot()
  })

  it('should saturate a hex color by 20%', () => {
    expect(saturate(0.2, '#CCCD64')).toMatchSnapshot()
  })

  it('should saturate an 8-digit hex color by 20%', () => {
    expect(saturate(0.2, '#6564CDB3')).toMatchSnapshot()
  })

  it('should saturate an 4-digit hex color by 20%', () => {
    expect(saturate(0.2, '#0f08')).toMatchSnapshot()
  })

  it('should saturate a color with opacity by 20%', () => {
    expect(saturate(0.2, 'rgba(101,100,205,0.7)')).toMatchSnapshot()
  })

  it('should saturate a color but not go beyond 255', () => {
    expect(saturate(0.8, 'rgba(255,200,200,0.7)')).toMatchSnapshot()
  })

  it('should saturate a color when passed a string for amount', () => {
    expect(saturate('0.1', '#444')).toMatchSnapshot()
  })
})
