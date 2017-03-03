// @flow
import borderRadius from '../borderRadius'

describe('borderRadius', () => {
  it('returns the proper values for the top side', () => {
    expect(borderRadius('top', '5px')).toMatchSnapshot()
  })
  it('returns the proper values for the bottom side', () => {
    expect(borderRadius('bottom', '5px')).toMatchSnapshot()
  })
  it('returns the proper values for the right side', () => {
    expect(borderRadius('right', '5px')).toMatchSnapshot()
  })
  it('returns the proper values for the left side', () => {
    expect(borderRadius('left', '5px')).toMatchSnapshot()
  })
  it('should throw an error when an invalid radius value is provided', () => {
    expect(() => {
      // $FlowIgnoreNextLine since the coming is invalid code, flow complains
      borderRadius('top')
    }).toThrow('borderRadius expects a radius value as a string as the second argument.')
  })
  it('should throw an error when no radius value is provided', () => {
    expect(() => {
      // $FlowIgnoreNextLine since the coming is invalid code, flow complains
      borderRadius('top', 100)
    }).toThrow('borderRadius expects a radius value as a string as the second argument.')
  })
  it('should throw an error when an invalid side value is provided', () => {
    expect(() => {
      borderRadius('all', '100%')
    }).toThrow('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.')
  })
})
