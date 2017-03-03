// @flow
import position from '../position'

describe('position', () => {
  it('properly applies a value when passed only one', () => {
    expect(position('relative', '12px')).toMatchSnapshot()
  })
  it('properly applies values when passed two', () => {
    expect(position('relative', '12px', '24px')).toMatchSnapshot()
  })
  it('properly applies values when passed three', () => {
    expect(position('relative', '12px', '24px', '36px')).toMatchSnapshot()
  })
  it('properly applies values when passed four', () => {
    expect(position('relative', '12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
  it('properly ignores position property, when not passed one', () => {
    expect(position('12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
})
