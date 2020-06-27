import parseToRgb from '../parseToRgb'

describe('parseToRgb', () => {
  it('should parse a hex color representation', () => {
    expect(parseToRgb('#Ff43AE')).toEqual({
      blue: 174,
      green: 67,
      red: 255,
    })
  })

  it('should parse an 8-digit hex color representation', () => {
    expect(parseToRgb('#Ff43AEFF')).toEqual({
      alpha: 1,
      blue: 174,
      green: 67,
      red: 255,
    })
  })

  it('should parse an 4-digit hex color representation', () => {
    expect(parseToRgb('#0f08')).toEqual({
      alpha: 0.53,
      blue: 0,
      green: 255,
      red: 0,
    })
  })

  it('should parse a reduced hex color representation', () => {
    expect(parseToRgb('#45a')).toEqual({
      blue: 170,
      green: 85,
      red: 68,
    })
  })

  it('should parse a rgba color representation', () => {
    expect(parseToRgb('rgba(174,67,255,0.6)')).toEqual({
      alpha: 0.6,
      blue: 255,
      green: 67,
      red: 174,
    })
    expect(parseToRgb('rgba( 174 , 67 , 255 , 0.6 )')).toEqual({
      alpha: 0.6,
      blue: 255,
      green: 67,
      red: 174,
    })
  })

  it('should parse a rgb color representation', () => {
    expect(parseToRgb('rgb(174,67,255)')).toEqual({
      blue: 255,
      green: 67,
      red: 174,
    })
    expect(parseToRgb('rgb( 174 , 67 , 255 )')).toEqual({
      blue: 255,
      green: 67,
      red: 174,
    })
  })

  it('should parse a hsl color representation', () => {
    expect(parseToRgb('hsl(210,10%,4%)')).toEqual({
      blue: 11,
      green: 10,
      red: 9,
    })
    expect(parseToRgb('hsl( 210 , 10% , 4% )')).toEqual({
      blue: 11,
      green: 10,
      red: 9,
    })
  })

  it('should parse a hsl color representation with decimal values', () => {
    expect(parseToRgb('hsl(210,16.4%,13.2%)')).toEqual({
      blue: 38,
      green: 33,
      red: 28,
    })
    expect(parseToRgb('hsl( 210 , 16.4%, 13.2% )')).toEqual({
      blue: 38,
      green: 33,
      red: 28,
    })
  })

  it('should parse a hsla color representation', () => {
    expect(parseToRgb('hsla(210,10%,40%,0.75)')).toEqual({
      alpha: 0.75,
      blue: 112,
      green: 102,
      red: 92,
    })
    expect(parseToRgb('hsla( 210 , 10% , 40% , 0.75 )')).toEqual({
      alpha: 0.75,
      blue: 112,
      green: 102,
      red: 92,
    })
  })

  it('should parse a hsla color representation with decimal values', () => {
    expect(parseToRgb('hsla(210,0.5%,0.5%,1.0)')).toEqual({
      alpha: 1,
      blue: 0,
      green: 0,
      red: 0,
    })
    expect(parseToRgb('hsla( 210 , 0.5% , 0.5% , 1.0 )')).toEqual({
      alpha: 1,
      blue: 0,
      green: 0,
      red: 0,
    })
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
