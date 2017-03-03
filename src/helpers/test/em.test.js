// @flow
import em from '../em'

describe('em', () => {
  it('should convert a simple number to ems', () => {
    expect({ height: em(16) }).toMatchSnapshot()
  })
})
