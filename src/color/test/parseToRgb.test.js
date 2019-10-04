import parseToRgb from '../parseToRgb'

describe('parseToRgb', () => {
  it('should parse a hex color representation', () => {
    expect(parseToRgb('#Ff43AE')).toMatchSnapshot()
  })

  it('should parse an 8-digit hex color representation', () => {
    expect(parseToRgb('#Ff43AEFF')).toMatchSnapshot()
  })

  it('should parse an 4-digit hex color representation', () => {
    expect(parseToRgb('#0f08')).toMatchSnapshot()
  })

  it('should parse a reduced hex color representation', () => {
    expect(parseToRgb('#45a')).toMatchSnapshot()
  })

  it('should parse a rgba color representation', () => {
    expect(parseToRgb('rgba(174,67,255,0.6)')).toMatchSnapshot()
    expect(parseToRgb('rgba( 174 , 67 , 255 , 0.6 )')).toMatchSnapshot()
  })

  it('should parse a rgb color representation', () => {
    expect(parseToRgb('rgb(174,67,255)')).toMatchSnapshot()
    expect(parseToRgb('rgb( 174 , 67 , 255 )')).toMatchSnapshot()
  })

  it('should parse a hsl color representation', () => {
    expect(parseToRgb('hsl(210,10%,4%)')).toMatchSnapshot()
    expect(parseToRgb('hsl( 210 , 10% , 4% )')).toMatchSnapshot()
  })

  it('should parse a hsla color representation', () => {
    expect(parseToRgb('hsla(210,10%,40%,0.75)')).toMatchSnapshot()
    expect(parseToRgb('hsla( 210 , 10% , 40% , 0.75 )')).toMatchSnapshot()
  })

  it('should throw an error if an invalid color string is provided', () => {
    expect(() => {
      parseToRgb('(174,67,255)')
    }).toThrow(
      "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.",
    )
  })

  it('should throw an error if an invalid color string is provided', () => {
    expect(() => {
      parseToRgb(12345)
    }).toThrow(
      'Passed an incorrect argument to a color function, please pass a string representation of a color.',
    )
  })

  it('should parse a hsla color representation with decimal values', () => {
    expect(parseToRgb('hsla(210,0.5%,0.5%,1.0)')).toMatchSnapshot()
    expect(parseToRgb('hsla( 210 , 0.5% , 0.5% , 1.0 )')).toMatchSnapshot()
  })

  it('should throw an error if an invalid hsl string is provided', () => {
    expect(() => {
      parseToRgb('hsl(210,120%,4%)')
    }).toThrow(
      `Couldn't generate valid rgb string from ${'hsl(210,120%,4%)'}, it returned ${'rgb(-2,10,22)'}.`,
    )
  })

  it('should throw an error if an unparsable hsla string is provided', () => {
    expect(() => {
      parseToRgb('hsla(210,120%,4%,0.7)')
    }).toThrow(
      `Couldn't generate valid rgb string from ${'hsla(210,120%,4%,0.7)'}, it returned ${'rgb(-2,10,22)'}.`,
    )
  })
})
