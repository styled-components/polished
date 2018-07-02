// @flow
import tracking from '../tracking'

describe('tracking', () => {
  it('should convert a tracking target to em', () => {
    expect({ letterSpacing: tracking(50) }).toMatchSnapshot()
  })
})
