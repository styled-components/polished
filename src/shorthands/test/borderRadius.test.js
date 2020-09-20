// @flow
import borderRadius from '../borderRadius'

describe('borderRadius', () => {
  it('returns the proper values for the top side', () => {
    expect(borderRadius('top', '5px')).toEqual({
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
    })
  })
  it('returns the proper values for the bottom side', () => {
    expect(borderRadius('bottom', '5px')).toEqual({
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px',
    })
  })
  it('returns the proper values for the right side', () => {
    expect(borderRadius('right', '5px')).toEqual({
      borderBottomRightRadius: '5px',
      borderTopRightRadius: '5px',
    })
  })
  it('returns the proper values for the left side', () => {
    expect(borderRadius('left', '5px')).toEqual({
      borderBottomLeftRadius: '5px',
      borderTopLeftRadius: '5px',
    })
  })
  it('returns the proper values when passed an integer', () => {
    expect(borderRadius('left', 5)).toEqual({
      borderBottomLeftRadius: 5,
      borderTopLeftRadius: 5,
    })
  })
  it('returns the proper values when passed zero', () => {
    expect(borderRadius('left', 0)).toEqual({
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
    })
  })
  it('should throw an error when no radius value is provided', () => {
    expect(() => {
      // $FlowFixMe
      borderRadius('top')
    }).toThrow('borderRadius expects a radius value as a string or number as the second argument.')
  })
  it('should throw an error when an invalid side value is provided', () => {
    expect(() => {
      borderRadius('all', '100%')
    }).toThrow(
      'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.',
    )
  })
})
