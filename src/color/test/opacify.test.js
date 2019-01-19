// @flow
import opacify from '../opacify'

describe('opacify', () => {
  it('should increase the opacity of hex #fff by 0.1 and still be 1', () => {
    expect(opacify(0.1, '#fff')).toMatchSnapshot()
  })

  it('should increase the opacity of an 8-digit hex color by 0.1 and still be 1', () => {
    expect(opacify(0.1, '#6564CDB3')).toMatchSnapshot()
  })

  it('should increase the opacity of an 4-digit hex color by 0.1 and still be 1', () => {
    expect(opacify(0.1, '#0f08')).toMatchSnapshot()
  })

  it('should increase the opacity of rgba(255, 0, 0, 0.5) by 0.1', () => {
    expect(opacify(0.1, 'rgba(101, 100, 205, 0.7)')).toMatchSnapshot()
  })

  it('should increase the opacity of rgba(255, 0, 0, .5) by 0.5', () => {
    expect(opacify(0.5, 'rgba(255, 0, 0, .5)')).toMatchSnapshot()
  })

  it('should increase the opacity of hsl(0, 0%, 100%) by 0.2 and still be 1', () => {
    expect(opacify(0.2, 'hsl(0, 0%, 100%)')).toMatchSnapshot()
  })

  it('should increase the opacity of hsla(0, 0%, 100%, .3) by 0.5', () => {
    expect(opacify(0.5, 'hsla(0, 0%, 100%, .3)')).toMatchSnapshot()
  })

  it('should not decrease the opacity below 0', () => {
    expect(opacify(-0.5, 'rgba(255, 0, 0, .2)')).toMatchSnapshot()
  })

  it('should not increase the opacity beyond 1', () => {
    expect(opacify(0.5, 'rgba(255, 0, 0, .8)')).toMatchSnapshot()
  })

  it('should increase the opacity when passed a string for amount', () => {
    expect(opacify('0.1', '#fff')).toMatchSnapshot()
  })

  it('should return transparent when passed transparent', () => {
    expect(opacify('0.1', 'transparent')).toMatchSnapshot()
  })

  it('should throw an error when enter an invalid color', () => {
    expect(() => {
      opacify(0.5, 'not a color')
    }).toThrow(
      new Error(
        "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.",
      ),
    )
  })
})
