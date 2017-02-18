// @flow

import pick from '../_pick'

describe('pick', () => {
  it('return an object with properites picked', () => {
    expect(pick(['a', 'c'], { a: 1, b: 2, c: 3, d: 4 })).toMatchSnapshot()
  })
})
