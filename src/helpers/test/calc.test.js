// @flow
import calc from '../calc'

describe('calc', () => {
  it('should multiply pixel values', () => {
    const base = '12px'
    const expected = '24px'
    expect(calc(base, baseAsNumber => baseAsNumber * 2)).toBe(expected)
  })
})
