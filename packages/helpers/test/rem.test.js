// @flow
import rem from '../src/rem'

describe('rem', () => {
  it('should convert a simple number to rems', () => {
    expect({ height: rem(16) }).toMatchSnapshot()
  })
})
