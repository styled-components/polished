// @flow
import isValidColor from '../isValidColor'

describe('isValidColor', () => {
  it('should return true when passed a hex color', () => {
    expect(isValidColor('#448')).toMatchSnapshot()
  })

  it('should return true when passed a 6-digit hex color', () => {
    expect(isValidColor('#CCCD64')).toMatchSnapshot()
  })

  it('should return true when passed a 8-digit hex color', () => {
    expect(isValidColor('#6564CDB3')).toMatchSnapshot()
  })

  it('should return true when passed a 4-digit hex color', () => {
    expect(isValidColor('#0f08')).toMatchSnapshot()
  })

  it('should return true when passed a rgb color', () => {
    expect(isValidColor('rgb(101,100,205)')).toMatchSnapshot()
  })

  it('should return true when passed a rgb color with opacity', () => {
    expect(isValidColor('rgba(101,100,205,0.7)')).toMatchSnapshot()
  })

  it('should return true when passed a hsl color', () => {
    expect(isValidColor('hsl(102,100%,50%)')).toMatchSnapshot()
  })

  it('should return true when passed a hsl color with opacity', () => {
    expect(isValidColor('hsl(102,100%,50%,0.7)')).toMatchSnapshot()
  })

  it('should return true when passed a color string', () => {
    expect(isValidColor('yellow')).toMatchSnapshot()
  })

  it('should return true when passed "transparent"', () => {
    expect(isValidColor('transparent')).toMatchSnapshot()
  })

  it('should return false when passed a random string', () => {
    expect(isValidColor('test')).toMatchSnapshot()
  })

  it('should return false when passed a boolean', () => {
    expect(isValidColor(true)).toMatchSnapshot()
  })
})
