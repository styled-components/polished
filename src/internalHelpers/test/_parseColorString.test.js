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
})
