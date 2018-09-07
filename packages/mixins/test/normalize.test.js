// @flow
import normalize from '../src/normalize'

describe('normalize', () => {
  it('should return rules', () => {
    expect(normalize()).toMatchSnapshot()
  })
})
