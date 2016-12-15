// @flow
import borderColor from '../borderColor'

describe('borderColor', function() {
  it('properly applies a value when passed only one', function() {
    expect(borderColor('12px')).toMatchSnapshot()
  })
  it('properly applies values when passed two', function() {
    expect(borderColor('12px', '24px')).toMatchSnapshot()
  })
  it('properly applies values when passed three', function() {
    expect(borderColor('12px', '24px', '36px')).toMatchSnapshot()
  })
  it('properly applies values when passed four', function() {
    expect(borderColor('12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
})
