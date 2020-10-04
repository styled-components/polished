// @flow
import getLuminance from '../getLuminance'

describe('getLuminance', () => {
  it('should return the luminance of a hex color', () => {
    expect(getLuminance('#444')).toEqual(0.058)
  })

  it('should return the luminance of an 8-digit hex color', () => {
    expect(getLuminance('#6564CDB3')).toEqual(0.163)
  })

  it('should return the luminance of an 4-digit hex color', () => {
    expect(getLuminance('#0f08')).toEqual(0.715)
  })

  it('should return the luminance of an rgba color', () => {
    expect(getLuminance('rgba(101,100,205,0.7)')).toEqual(0.163)
  })

  it('should return the luminance of an rgb color', () => {
    expect(getLuminance('rgb(204,205,100)')).toEqual(0.574)
  })

  it('should return the luminance of an hlsa color', () => {
    expect(getLuminance('hsla(250, 100%, 50%, 0.2)')).toEqual(0.077)
  })

  it('should return the luminance of an hls color', () => {
    expect(getLuminance('hsl(0, 100%, 50%)')).toEqual(0.213)
  })

  it('should return the luminance of a named CSS color', () => {
    expect(getLuminance('papayawhip')).toEqual(0.878)
  })

  it('should return 0 when passed transparent', () => {
    expect(getLuminance('transparent')).toEqual(0)
  })
})
