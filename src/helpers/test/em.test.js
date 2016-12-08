// @flow
import em from '../em'

describe('em', function() {
  it('should convert a simple number to ems', () => {
    expect({ height: em(16) }).toMatchSnapshot()
  })

  it('should convert a simple string with px to ems', () => {
    expect({ height: em('16px') }).toMatchSnapshot()
  })

  it('should convert a complex number to ems', () => {
    expect({ height: em(18) }).toMatchSnapshot()
  })

  it('should convert a complex string with px to ems', () => {
    expect({ height: em('18px') }).toMatchSnapshot()
  })

  it('should allow changing the base with a number', () => {
    expect({ height: em('16px', 8) }).toMatchSnapshot()
  })

  it('should allow changing the base with a string', () => {
    expect({ height: em('16px', '8px') }).toMatchSnapshot()
  })
})
