// @flow
import borderStyle from '../borderStyle'

describe('borderStyle', function() {
  it('properly applies a value when passed only one', function() {
    expect(borderStyle('12px')).toMatchSnapshot()
  })
  it('properly applies values when passed two', function() {
    expect(borderStyle('12px', '24px')).toMatchSnapshot()
  })
  it('properly applies values when passed three', function() {
    expect(borderStyle('12px', '24px', '36px')).toMatchSnapshot()
  })
  it('properly applies values when passed four', function() {
    expect(borderStyle('12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
})
