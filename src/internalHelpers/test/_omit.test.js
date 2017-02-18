// @flow

import omit from '../_omit'

describe('omit', () => {
  it('return an object with properites omitted', () => {
    expect(omit(['a', 'c'], { a: 1, b: 2, c: 3, d: 4 })).toMatchSnapshot()
  })
})
