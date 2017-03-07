import parseToHsl from '../parseToHsl'

describe('parseToHsl', () => {
  it('should parse a hex color representation', () => {
    expect(parseToHsl('#Ff43AE')).toMatchSnapshot()
  })

  it('should parse a reduced hex color representation', () => {
    expect(parseToHsl('#45a')).toMatchSnapshot()
  })

  it('should parse a rgba color representation', () => {
    expect(parseToHsl('rgba(174,67,255,0.6)')).toMatchSnapshot()
  })

  it('should parse a rgb color representation', () => {
    expect(parseToHsl('rgb(174,67,255)')).toMatchSnapshot()
  })

  it('should parse a hsl color representation', () => {
    expect(parseToHsl('hsl(210,10%,4%)')).toMatchSnapshot()
  })

  it('should parse a hsla color representation', () => {
    expect(parseToHsl('hsla(210,10%,40%,0.75)')).toMatchSnapshot()
  })

  it('should throw an error if an invalid color string is provided', () => {
    expect(() => { parseToHsl('(174,67,255)') }).toThrow('Couldn\'t parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.')
  })
})
