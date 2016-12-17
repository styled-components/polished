// @flow
import borderStyle from '../borderStyle'

describe('borderStyle', function() {
  it('properly applies a value when passed only one', function() {
    expect(borderStyle('solid')).toMatchSnapshot()
  })
  it('properly applies values when passed two', function() {
    expect(borderStyle('solid', 'dashed')).toMatchSnapshot()
  })
  it('properly applies values when passed three', function() {
    expect(borderStyle('solid', 'dashed', 'dotted')).toMatchSnapshot()
  })
  it('properly applies values when passed four', function() {
    expect(borderStyle('solid', 'dashed', 'dotted', 'double')).toMatchSnapshot()
  })
})
