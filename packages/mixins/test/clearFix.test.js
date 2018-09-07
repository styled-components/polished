// @flow
import clearFix from '../clearFix'

describe('clearFix', () => {
  it('should pass parent to pseudo selector', () => {
    expect(clearFix('div')).toMatchSnapshot()
  })

  it('should default to & when no parent is passed', () => {
    expect(clearFix()).toMatchSnapshot()
  })
})
