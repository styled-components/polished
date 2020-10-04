// @flow
import transparentize from '../transparentize'

describe('transparentize', () => {
  it('should reduce the opacity of hex #fff by 0.1', () => {
    expect(transparentize(0.1, '#fff')).toEqual('rgba(255,255,255,0.9)')
  })

  it('should reduce the opacity of an 8-digit hex color by 0.1', () => {
    expect(transparentize(0.1, '#6564CDB3')).toEqual('rgba(101,100,205,0.6)')
  })

  it('should reduce the opacity of an 4-digit hex color by 0.1', () => {
    expect(transparentize(0.1, '#0f08')).toEqual('rgba(0,255,0,0.43)')
  })

  it('should reduce the opacity of rgb(255, 0, 255) by 0.1', () => {
    expect(transparentize(0.1, 'rgb(255, 0, 255)')).toEqual('rgba(255,0,255,0.9)')
  })

  it('should reduce the opacity of rgba(255, 0, 0, 1) by 0.1', () => {
    expect(transparentize(0.1, 'rgba(101, 100, 205, .7)')).toEqual('rgba(101,100,205,0.6)')
  })

  it('should reduce the opacity of rgba(255, 0, 0, .5) by 0.3', () => {
    expect(transparentize(0.3, 'rgba(255, 0, 0, .5)')).toEqual('rgba(255,0,0,0.2)')
  })

  it('should reduce the opacity of rgba(255, 0, 0, .5) by 0.5', () => {
    expect(transparentize(0.5, 'rgba(255, 0, 0, .5)')).toEqual('rgba(255,0,0,0)')
  })

  it('should reduce the opacity of hsl(0, 0%, 100%) by 0.2', () => {
    expect(transparentize(0.2, 'hsl(0, 0%, 100%)')).toEqual('rgba(255,255,255,0.8)')
  })

  it('should reduce the opacity of hsl(0, 0.5%, 0.5%) by 0.1', () => {
    expect(transparentize(0.1, 'hsl(0, 0.5%, 0.5%)')).toEqual('rgba(0,0,0,0.9)')
  })

  it('should reduce the opacity of hsla(0, 0%, 100%, .8) by 0.5', () => {
    expect(transparentize(0.5, 'hsla(0, 0%, 100%, .8)')).toEqual('rgba(255,255,255,0.3)')
  })

  it('should reduce the opacity of hsla(0, 0.5%, 0.5%, .1) by 0.4', () => {
    expect(transparentize(0.4, 'hsla(0, 0.5%, 0.5%, 0.4)')).toEqual('rgba(0,0,0,0)')
  })

  it('should not reduce the opacity below 0', () => {
    expect(transparentize(0.5, 'rgba(255, 0, 0, .2)')).toEqual('rgba(255,0,0,0)')
  })

  it('should not increase the opacity beyond 1', () => {
    expect(transparentize(-0.5, 'rgba(255, 0, 0, .8)')).toEqual('#f00')
  })

  it('should reduce the opacity when passed a string for amount', () => {
    expect(transparentize('0.1', '#fff')).toEqual('rgba(255,255,255,0.9)')
  })

  it('should return transparent when passed transparent', () => {
    expect(transparentize('0.1', 'transparent')).toEqual('transparent')
  })

  it('should throw an error when enter an invalid color', () => {
    expect(() => {
      transparentize(0.5, 'not a color')
    }).toThrow(
      "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.",
    )
  })
})
