// @flow
import margin from '../margin'

describe('margin', function() {
  it('properly applies a value when passed only one', function() {
    expect(margin('12px')).toMatchSnapshot()
  })
  it('properly applies values when passed two', function() {
    expect(margin('12px', '24px')).toMatchSnapshot()
  })
  it('properly applies values when passed three', function() {
    expect(margin('12px', '24px', '36px')).toMatchSnapshot()
  })
  it('properly applies values when passed four', function() {
    expect(margin('12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
})
