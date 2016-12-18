// @flow
import borderWidth from '../borderWidth'

describe('borderWidth', function() {
  it('properly applies a value when passed only one', function() {
    expect(borderWidth('12px')).toMatchSnapshot()
  })
  it('properly applies values when passed two', function() {
    expect(borderWidth('12px', '24px')).toMatchSnapshot()
  })
  it('properly applies values when passed three', function() {
    expect(borderWidth('12px', '24px', '36px')).toMatchSnapshot()
  })
  it('properly applies values when passed four', function() {
    expect(borderWidth('12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
})
