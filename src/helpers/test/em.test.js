// @flow
import em from '../em'

describe('em', function() {
  it('should convert a simple number to ems', function() {
    expect({ height: em(16) }).toMatchSnapshot()
  })
})
