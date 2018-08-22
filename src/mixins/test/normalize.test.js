// @flow
import normalize from '../normalize'

describe('normalize', () => {
  it('should return rules', () => {
    expect(normalize()).toMatchSnapshot()
  })
})
