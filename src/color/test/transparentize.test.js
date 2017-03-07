// @flow
import transparentize from '../transparentize'

describe('transparentize', () => {
  it('should reduce the opacity of hex #fff by 0.1', () => {
    expect(transparentize(0.1, '#fff')).toMatchSnapshot()
  })

  it('should reduce the opacity of rgb(255, 0, 255) by 0.1', () => {
    expect(transparentize(0.1, 'rgb(255, 0, 255)')).toMatchSnapshot()
  })

  it('should reduce the opacity of rgba(255, 0, 0, 1) by 0.1', () => {
    expect(transparentize(0.1, 'rgba(255, 0, 0, 1)')).toMatchSnapshot()
  })

  it('should reduce the opacity of rgba(255, 0, 0, .5) by 0.3', () => {
    expect(transparentize(0.3, 'rgba(255, 0, 0, .5)')).toMatchSnapshot()
  })

  it('should reduce the opacity of rgba(255, 0, 0, .5) by 0.5', () => {
    expect(transparentize(0.5, 'rgba(255, 0, 0, .5)')).toMatchSnapshot()
  })

  it('should reduce the opacity of hsl(0, 0%, 100%) by 0.2', () => {
    expect(transparentize(0.2, 'hsl(0, 0%, 100%)')).toMatchSnapshot()
  })

  it('should reduce the opacity of hsla(0, 0%, 100%, .8) by 0.5', () => {
    expect(transparentize(0.5, 'hsla(0, 0%, 100%, .8)')).toMatchSnapshot()
  })

  it('should not reduce the opacity below 0', () => {
    expect(transparentize(0.5, 'rgba(255, 0, 0, .2)')).toMatchSnapshot()
  })

  it('should not increase the opacity beyond 1', () => {
    expect(transparentize(-0.5, 'rgba(255, 0, 0, .8)')).toMatchSnapshot()
  })

  it('should throw an error when enter an invalid color', () => {
    expect(() => { transparentize(0.5, 'not a color') }).toThrow(new Error('Couldn\'t parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.'))
  })
})
