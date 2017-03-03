// @flow
import normalize from '../normalize'

describe('normalize', () => {
  it('should default to all rules', () => {
    expect(normalize()).toMatchSnapshot()
  })
  it('should only return unopinionated rules, when passed true', () => {
    expect(normalize(true)).toMatchSnapshot()
  })
})
