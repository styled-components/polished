// @flow
import getLuminance from '../getLuminance'

describe('getLuminance', () => {
  it('should return the luminance of a hex color', () => {
    expect(getLuminance('#444')).toMatchSnapshot()
  })

  it('should return the luminance of an rgba color', () => {
    expect(getLuminance('rgba(204,205,100,0.7)')).toMatchSnapshot()
  })

  it('should return the luminance of an rgb color', () => {
    expect(getLuminance('rgb(204,205,100)')).toMatchSnapshot()
  })

  it('should return the luminance of an hlsa color', () => {
    expect(getLuminance('hsla(250, 100%, 50%, 0.2)')).toMatchSnapshot()
  })

  it('should return the luminance of an hls color', () => {
    expect(getLuminance('hsl(0, 100%, 50%)')).toMatchSnapshot()
  })

  it('should return the luminance of a named CSS color', () => {
    expect(getLuminance('papayawhip')).toMatchSnapshot()
  })
})
