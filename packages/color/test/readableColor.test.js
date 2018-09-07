// @flow
import readableColor from '../src/readableColor'

describe('readableColor', () => {
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
  it('should return black given gray, #787878', () => {
    expect(readableColor('#787878')).toMatchSnapshot()
  })
  it('should return white given gray, #757575', () => {
    expect(readableColor('#757575')).toMatchSnapshot()
  })
  it('should return white given black, #0000001A', () => {
    expect(readableColor('#0000001A')).toMatchSnapshot()
  })
  it('should return black given white, #FFFFFFBF', () => {
    expect(readableColor('#FFFFFFBF')).toMatchSnapshot()
  })
  it('should return black given white, rgb(255,255,255)', () => {
    expect(readableColor('rgb(255,255,255)')).toMatchSnapshot()
  })
  it('should return white given black, rgb(0,0,0)', () => {
    expect(readableColor('rgb(0,0,0)')).toMatchSnapshot()
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
  it('should return white given black, "black"', () => {
    expect(readableColor('black')).toMatchSnapshot()
  })
  it('should return black given papayawhip, "papayawhip"', () => {
    expect(readableColor('papayawhip')).toMatchSnapshot()
  })
  it('should return black given palevioletred, "palevioletred"', () => {
    expect(readableColor('palevioletred')).toMatchSnapshot()
  })
  it('should return black given white, "white"', () => {
    expect(readableColor('white')).toMatchSnapshot()
  })
  it('should return black given red, hsl(0, 100%, 50%)', () => {
    expect(readableColor('hsl(0, 100%, 50%)')).toMatchSnapshot()
  })
  it('should return white given blue, hsl(250, 100%, 50%)', () => {
    expect(readableColor('hsl(250, 100%, 50%)')).toMatchSnapshot()
  })
  it('should return black given gray, hsl(0, 0%, 47%)', () => {
    expect(readableColor('hsl(0, 0%, 47%)')).toMatchSnapshot()
  })
  it('should return white given gray, hsl(0, 0%, 45%)', () => {
    expect(readableColor('hsl(0, 0%, 45%)')).toMatchSnapshot()
  })
  it('should return white given blue, hsla(250, 100%, 50%, 0.2)', () => {
    expect(readableColor('hsla(250, 100%, 50%, 0.2)')).toMatchSnapshot()
  })
})
