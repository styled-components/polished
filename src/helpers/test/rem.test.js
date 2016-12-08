// @flow
import rem from '../rem'

describe('rem', function() {
  it('should convert a simple number to rems', () => {
    expect({ height: rem(16) }).toMatchSnapshot()
  })

  it('should convert a simple string with px to rems', () => {
    expect({ height: rem('16px') }).toMatchSnapshot()
  })

  it('should convert a complex number to rems', () => {
    expect({ height: rem(18) }).toMatchSnapshot()
  })

  it('should convert a complex string with px to rems', () => {
    expect({ height: rem('18px') }).toMatchSnapshot()
  })

  it('should allow changing the base with a number', () => {
    expect({ height: rem('16px', 8) }).toMatchSnapshot()
  })

  it('should allow changing the base with a string', () => {
    expect({ height: rem('16px', '8px') }).toMatchSnapshot()
  })
})
