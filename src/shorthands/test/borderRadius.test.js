// @flow
import borderRadius from '../borderRadius'

describe('borderRadius', function() {
  it('returns the proper values for the top side', function() {
    expect(borderRadius('top', '5px')).toMatchSnapshot()
  })
  it('returns the proper values for the bottom side', function() {
    expect(borderRadius('bottom', '5px')).toMatchSnapshot()
  })
  it('returns the proper values for the right side', function() {
    expect(borderRadius('right', '5px')).toMatchSnapshot()
  })
  it('returns the proper values for the left side', function() {
    expect(borderRadius('left', '5px')).toMatchSnapshot()
  })
  it('should throw an error when an invalid radius value is provided', function() {
    expect(() => {
      // $FlowIgnoreNextLine since the coming is invalid code, flow complains
      borderRadius('top')
    }).toThrow('borderRadius expects a radius value as a string.')
  })
  it('should throw an error when no radius value is provided', function() {
    expect(() => {
      // $FlowIgnoreNextLine since the coming is invalid code, flow complains
      borderRadius('top', 100)
    }).toThrow('borderRadius expects a radius value as a string.')
  })
  it('should throw an error when an invalid side value is provided', function() {
    expect(() => {
      borderRadius('all', '100%')
    }).toThrow('borderRadius expects a valid value for side.')
  })
})
