// @flow
import rem from '../rem'

describe('rem', function() {
  it('should convert a simple number to rems', function() {
    expect({ height: rem(16) }).toMatchSnapshot()
  })
})
