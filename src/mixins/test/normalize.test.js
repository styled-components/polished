// @flow
import normalize from '../normalize'

describe('normalize', function() {
  it('should default to all rules', function() {
    expect(normalize()).toMatchSnapshot()
  })
  it('should only return unopinionated rules, when passed true', function() {
    expect(normalize(true)).toMatchSnapshot()
  })
})
