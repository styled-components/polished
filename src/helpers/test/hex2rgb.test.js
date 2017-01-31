// @flow
import hex2rgb from '../hex2rgb'

describe('hex2rgb', function() {
  it('should convert hex color to rgb', function() {
    expect({ color: hex2rgb('#f00') }).toMatchSnapshot()
  })

  it('should throw an error if color is invalid', () => {
    expect(() => ({ color: hex2rgb('#test') }))
      .toThrow('Please enter a valid colors')
  })

  it('should throw an error if color is missing', () => {
    expect(() => ({ color: hex2rgb() }))
      .toThrow('Please enter a valid colors')
  })
})
