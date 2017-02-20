import parseColorString from '../_parseColorString'

describe('parseColorString', () => {
  it('should parse a hex color representation', () => {
    expect(parseColorString('#Ff43AE')).toMatchSnapshot()
  })

  it('should parse a reduced hex color representation', () => {
    expect(parseColorString('#45a')).toMatchSnapshot()
  })

  it('should parse a rgba color representation', () => {
    expect(parseColorString('rgba(174,67,255,0.6)')).toMatchSnapshot()
  })

  it('should parse a rgb color representation', () => {
    expect(parseColorString('rgb(174,67,255)')).toMatchSnapshot()
  })

  it('should throw an error if an invalid color string is provided', () => {
    expect(() => { parseColorString('(174,67,255)') }).toThrow('Couldn\'t parse the color string. Please provide the color in hex, rgb, rgba, hsl or hsla notation as a string.')
  })
})
