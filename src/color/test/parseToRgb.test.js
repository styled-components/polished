import parseToRgb from '../parseToRgb'

describe('parseToRgb', () => {
  it('should parse a hex color representation', () => {
    expect(parseToRgb('#Ff43AE')).toMatchSnapshot()
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
      'Could not parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.',
    )
  })

  it('should throw an error if a string is not provided', () => {
    expect(() => {
      parseToRgb({ red: 255, blue: 255, green: 255 })
    }).toThrow(
      'Passed an incorrect argument to a color function, please pass a string representation of a color.',
    )
  })
})
