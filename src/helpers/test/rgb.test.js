// @flow
import rgb from '../rgb'

describe('em', () => {
  it('should convert a rgb string to a hex color', () => {
    expect({ background: rgb('255, 205, 100') }).toMatchSnapshot()
  })
})
