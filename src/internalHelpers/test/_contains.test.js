// @flow

import contains from '../_contains'

describe('contains', () => {
  it('should return `true` if the array contains the value', () => {
    expect(contains(1, [1, 2, 3])).toMatchSnapshot()
  })

  it('should return `false` if the array contains the value', () => {
    expect(contains(4, [1, 2, 3])).toMatchSnapshot()
  })
})
