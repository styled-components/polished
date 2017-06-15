// @flow
import readableColor from '../readableColor'

describe('readableColor', () => {
  it('should return black given white', () => {
    expect(readableColor('rgb(255,255,255)')).toMatchSnapshot()
  })

  it('should return white given black', () => {
    expect(readableColor('rgb(0,0,0)')).toMatchSnapshot()
  })

  it('should return black given white hex', () => {
    expect(readableColor('#fff')).toMatchSnapshot()
  })

  it('should return white given black hex', () => {
    expect(readableColor('#000')).toMatchSnapshot()
  })

  it('should return black given red', () => {
    expect(readableColor('#FF0000')).toMatchSnapshot()
  })

  it('should return white given blue', () => {
    expect(readableColor('#0000FF')).toMatchSnapshot()
  })

  it('should return white given this gray', () => {
    expect(readableColor('rgb(118,118,118)')).toMatchSnapshot()
  })

  it('should return black given this gray', () => {
    expect(readableColor('rgb(117,118,118)')).toMatchSnapshot()
  })
})
