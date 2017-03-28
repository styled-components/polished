// @flow

import curry2 from '../_curry2'

describe('curry2', () => {
  it('should execute the function right now', () => {
    const fn = (amount, color) => `${amount}-${color}`
    expect(curry2(fn)(0.5, '#FFF')).toEqual('0.5-#FFF')
  })

  it('should create another function that can be executed', () => {
    const fn = (amount, color) => `${amount}-${color}`
    expect(curry2(fn)(0.5)('#FFF')).toEqual('0.5-#FFF')
  })
})
