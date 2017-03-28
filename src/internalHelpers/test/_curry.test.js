// @flow

import curry from '../_curry'

describe('curry', () => {
  it('should execute the function right now', () => {
    const fn = (amount, color) => `${amount}-${color}`
    expect(curry(fn)(0.5, '#FFF')).toEqual('0.5-#FFF')
  })

  it('should create another function that can be executed', () => {
    const fn = (amount, color) => `${amount}-${color}`
    expect(curry(fn)(0.5)('#FFF')).toEqual('0.5-#FFF')
  })
})
