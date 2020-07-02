// @flow
import readableColor from '../readableColor'

describe('readableColor', () => {
  it('should return black given white hex, #fff', () => {
    expect(readableColor('#fff')).toEqual('#000')
  })

  it('should return white given black, #000', () => {
    expect(readableColor('#000')).toEqual('#fff')
  })

  it('should return custom light background when passed dark color', () => {
    expect(readableColor('black', '#001', '#ff8')).toEqual('#ff8')
  })

  it('should return custom dark background when passed light color', () => {
    expect(readableColor('white', '#001', '#ff8')).toEqual('#001')
  })

  it('should return black given red, #FF0000', () => {
    expect(readableColor('#FF0000')).toEqual('#000')
  })
  it('should return white given blue, #0000FF', () => {
    expect(readableColor('#0000FF')).toEqual('#fff')
  })
  it('should return black given gray, #787878', () => {
    expect(readableColor('#787878')).toEqual('#000')
  })
  it('should return white given gray, #757575', () => {
    expect(readableColor('#757575')).toEqual('#fff')
  })
  it('should return white given black, #0000001A', () => {
    expect(readableColor('#0000001A')).toEqual('#fff')
  })
  it('should return black given white, #FFFFFFBF', () => {
    expect(readableColor('#FFFFFFBF')).toEqual('#000')
  })
  it('should return black given white, rgb(255,255,255)', () => {
    expect(readableColor('rgb(255,255,255)')).toEqual('#000')
  })
  it('should return white given black, rgb(0,0,0)', () => {
    expect(readableColor('rgb(0,0,0)')).toEqual('#fff')
  })
  it('should return black given rgb(120,120,120)', () => {
    expect(readableColor('rgb(120,120,120)')).toEqual('#000')
  })

  it('should return white given rgb(117,117,117)', () => {
    expect(readableColor('rgb(117,117,117)')).toEqual('#fff')
  })
  it('should return white given black, rgba(0,0,0,0.7)', () => {
    expect(readableColor('rgba(0,0,0,0.7)')).toEqual('#fff')
  })
  it('should return white given black, rgba(0,0,0,0.1)', () => {
    expect(readableColor('rgba(0,0,0,0.1)')).toEqual('#fff')
  })
  it('should return white given black, "black"', () => {
    expect(readableColor('black')).toEqual('#fff')
  })
  it('should return black given papayawhip, "papayawhip"', () => {
    expect(readableColor('papayawhip')).toEqual('#000')
  })
  it('should return black given palevioletred, "palevioletred"', () => {
    expect(readableColor('palevioletred')).toEqual('#000')
  })
  it('should return black given white, "white"', () => {
    expect(readableColor('white')).toEqual('#000')
  })
  it('should return black given red, hsl(0, 100%, 50%)', () => {
    expect(readableColor('hsl(0, 100%, 50%)')).toEqual('#000')
  })
  it('should return white given blue, hsl(250, 100%, 50%)', () => {
    expect(readableColor('hsl(250, 100%, 50%)')).toEqual('#fff')
  })
  it('should return black given gray, hsl(0, 0%, 47%)', () => {
    expect(readableColor('hsl(0, 0%, 47%)')).toEqual('#000')
  })
  it('should return white given gray, hsl(0, 0%, 45%)', () => {
    expect(readableColor('hsl(0, 0%, 45%)')).toEqual('#fff')
  })
  it('should return white given blue, hsla(250, 100%, 50%, 0.2)', () => {
    expect(readableColor('hsla(250, 100%, 50%, 0.2)')).toEqual('#fff')
  })
  it('should return custom light background when contrast meets AA in strict mode', () => {
    expect(readableColor('red', '#001', '#ff8')).toEqual('#001')
  })
  it('should return custom dark background when contrast meets AA in strict mode', () => {
    expect(readableColor('darkred', '#001', '#ff8')).toEqual('#ff8')
  })
  it('should return the default light background when contrast fails AA in strict mode', () => {
    expect(readableColor('red', '#333', '#aaa')).toEqual('#000')
  })
  it('should return the default dark background when contrast fails AA in strict mode', () => {
    expect(readableColor('darkred', '#333', '#aaa')).toEqual('#fff')
  })
  it('should return the the passed colors when constrast fails AA with strict mode off', () => {
    expect(readableColor('darkred', '#333', '#aaa', false)).toEqual('#aaa')
  })
})
