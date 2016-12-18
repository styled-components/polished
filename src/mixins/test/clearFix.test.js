// @flow
import clearFix from '../clearFix'

describe('clearFix', function() {

  it('should pass parent to pseudo selector', function() {
    expect(clearFix('div')).toMatchSnapshot()
  })

  it('should default to & when no parent is passed', function() {
    expect(clearFix()).toMatchSnapshot()
  })

})
