// @flow
import em from '../src/em'

describe('em', () => {
  it('should convert a simple number to ems', () => {
    expect({ height: em(16) }).toMatchSnapshot()
  })
})
