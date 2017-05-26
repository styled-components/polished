// @flow
import readableText from '../readableText'

describe('readableText', () => {
  it('should return black given white', () => {
    expect(readableText('rgb(255,255,255)')).toMatchSnapshot()
  })

  it('should return white given black', () => {
    expect(readableText('rgb(0,0,0)')).toMatchSnapshot()
  })

  it('should return black given white hex', () => {
    expect(readableText('#fff')).toMatchSnapshot()
  })

  it('should return white given black hex', () => {
    expect(readableText('#000')).toMatchSnapshot()
  })

  it('should return black given red', () => {
    expect(readableText('#FF0000')).toMatchSnapshot()
  })

  it('should return white given blue', () => {
    expect(readableText('#0000FF')).toMatchSnapshot()
  })

  it('should return white given this gray', () => {
    expect(readableText('rgb(118,118,118)')).toMatchSnapshot()
  })

  it('should return black given this gray', () => {
    expect(readableText('rgb(117,118,118)')).toMatchSnapshot()
  })
})
