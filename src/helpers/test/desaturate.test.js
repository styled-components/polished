// @flow
import desaturate from '../desaturate'

describe('desaturate', () => {
  it('should desaturate a reduced hex color by 10%', () => {
    expect(desaturate(0.1, '#444')).toMatchSnapshot()
  })

  it('should desaturate a hex color by 20%', () => {
    expect(desaturate(0.2, '#CCCD64')).toMatchSnapshot()
  })

  it('should desaturate a color with opacity by 20%', () => {
    expect(desaturate(0.2, 'rgba(204,205,100,0.7)')).toMatchSnapshot()
  })

  it('should desaturate a color but not go below 0', () => {
    expect(desaturate(0.8, 'rgba(40,20,10,0.7)')).toMatchSnapshot()
  })
})
