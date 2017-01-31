// @flow
import mix from '../mix'

describe('mix', function() {
  it('should mix two colors', function() {
    expect({ color: mix('#f00', '#00f', 25) }).toMatchSnapshot()
  })

  it('should mix two colors with weight in string percentage', function() {
    expect({ color: mix('#f00', '#00f', '25%') }).toMatchSnapshot()
  })

  it('should mix two colors with default value', function() {
    expect({ color: mix('#f00', '#00f') }).toMatchSnapshot()
  })

  it('should throw an error if one color is missing', () => {
    expect(() => ({ color: mix('#f00') }))
      .toThrow('Please enter a valid colors')
  })

  it('should throw an error if empty', () => {
    expect(() => ({ color: mix() }))
      .toThrow('Please enter a valid colors')
  })

  it('should throw an error if one color is invalid', () => {
    expect(() => ({ color: mix('#test', '#f00') }))
      .toThrow('Please enter a valid colors')
  })
})
