// @flow
import lighten from '../lighten'

describe('lighten', () => {
  it('should lighten a color by 10%', () => {
    expect(lighten(0.1, '#444')).toMatchSnapshot()
  })

  it('should lighten a hex color by 20%', () => {
    expect(lighten(0.2, '#CCCD64')).toMatchSnapshot()
  })

  it('should lighten a color with opacity by 20%', () => {
    expect(lighten(0.2, 'rgba(204,205,100,0.7)')).toMatchSnapshot()
  })

  it('should lighten a color but not go beyond 255', () => {
    expect(lighten(0.8, 'rgba(255,200,200,0.7)')).toMatchSnapshot()
  })
})
