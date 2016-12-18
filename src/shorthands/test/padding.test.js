// @flow
import padding from '../padding'

describe('padding', function() {
  it('properly applies a value when passed only one', function() {
    expect(padding('12px')).toMatchSnapshot()
  })
  it('properly applies values when passed two', function() {
    expect(padding('12px', '24px')).toMatchSnapshot()
  })
  it('properly applies values when passed three', function() {
    expect(padding('12px', '24px', '36px')).toMatchSnapshot()
  })
  it('properly applies values when passed four', function() {
    expect(padding('12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
})
