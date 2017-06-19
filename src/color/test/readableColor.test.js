// @flow
import readableColor from '../readableColor'

describe('readableColor', () => {
  it('should return black given white, rgb(255,255,255)', () => {
    expect(readableColor('rgb(255,255,255)')).toMatchSnapshot()
  })

  it('should return white given black, rgb(0,0,0)', () => {
    expect(readableColor('rgb(0,0,0)')).toMatchSnapshot()
  })

  it('should return black given white hex, #fff', () => {
    expect(readableColor('#fff')).toMatchSnapshot()
  })

  it('should return white given black, #000', () => {
    expect(readableColor('#000')).toMatchSnapshot()
  })

  it('should return black given red, #FF0000', () => {
    expect(readableColor('#FF0000')).toMatchSnapshot()
  })

  it('should return white given blue, #0000FF', () => {
    expect(readableColor('#0000FF')).toMatchSnapshot()
  })

  it('should return black given rgb(120,120,120)', () => {
    expect(readableColor('rgb(120,120,120)')).toMatchSnapshot()
  })

  it('should return white given rgb(117,117,117)', () => {
    expect(readableColor('rgb(117,117,117)')).toMatchSnapshot()
  })
  it('should return white given black, rgba(0,0,0,0.7)', () => {
    expect(readableColor('rgba(0,0,0,0.7)')).toMatchSnapshot()
  })
  it('should return white given black, rgba(0,0,0,0.1)', () => {
    expect(readableColor('rgba(0,0,0,0.1)')).toMatchSnapshot()
  })
  it('should return black given white', () => {
    expect(readableColor('white')).toMatchSnapshot()
  })
  it('should return black given papayawhip', () => {
    expect(readableColor('papayawhip')).toMatchSnapshot()
  })
  it('should return black given white', () => {
    expect(readableColor('white')).toMatchSnapshot()
  })
  it('should return black given red, hsl(0, 100%, 50%)', () => {
    expect(readableColor('hsl(0, 100%, 50%)')).toMatchSnapshot()
  })
  it('should return white given blue, hsl(250, 100%, 50%)', () => {
    expect(readableColor('hsl(250, 100%, 50%)')).toMatchSnapshot()
  })
  it('should return white given blue, hsla(250, 100%, 50%, 0.2)', () => {
    expect(readableColor('hsla(250, 100%, 50%, 0.2)')).toMatchSnapshot()
  })
})
