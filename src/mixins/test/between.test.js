// @flow
import between from '../between'

describe('between', () => {
  it('should return a valid calc formula when passed min/max screen sizes', () => {
    expect(between('20px', '100px', '400px', '1000px')).toMatchSnapshot()
  })

  it('should return a valid calc formula when not passed min/max screen sizes', () => {
    expect(between('20px', '100px')).toMatchSnapshot()
  })

  it('should return a valid calc formula when passed unitless to/from values as numbers', () => {
    expect(between(20, 100)).toMatchSnapshot()
  })

  it('should return a valid calc formula when passed unitless to/from values as strings', () => {
    expect(between('20', '100')).toMatchSnapshot()
  })
  // Errors
  it('should throw an error when not passed min/max screen size as a string', () => {
    expect(() => {
      // $FlowFixMe
      between('20px', '100px', 400, 1000)
    }).toThrow(
      'minScreen and maxScreen must be provided as stringified numbers with the same units.',
    )
  })

  it('should throw an error when passed min/max screen size with different units', () => {
    expect(() => {
      // $FlowFixMe
      between('20px', '100px', '4em', '1000px')
    }).toThrow(
      'minScreen and maxScreen must be provided as stringified numbers with the same units.',
    )
  })

  it('should throw an error when passed to/from size with different units', () => {
    expect(() => {
      // $FlowFixMe
      between('1em', '100px', '400px', '1000px')
    }).toThrow(
      'fromSize and toSize must be provided as stringified numbers with the same units.',
    )
  })
})
