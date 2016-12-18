// @flow
import position from '../position'

describe('position', function() {
  it('properly applies a value when passed only one', function() {
    expect(position('relative', '12px')).toMatchSnapshot()
  })
  it('properly applies values when passed two', function() {
    expect(position('relative', '12px', '24px')).toMatchSnapshot()
  })
  it('properly applies values when passed three', function() {
    expect(position('relative', '12px', '24px', '36px')).toMatchSnapshot()
  })
  it('properly applies values when passed four', function() {
    expect(position('relative', '12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
  it('properly ignores position property, when not passed one', function() {
    expect(position('12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
})
