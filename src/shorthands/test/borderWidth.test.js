// @flow
import borderWidth from '../borderWidth'

describe('borderWidth', () => {
  it('properly applies a value when passed only one', () => {
    expect(borderWidth('12px')).toMatchSnapshot()
  })
  it('properly applies values when passed two', () => {
    expect(borderWidth('12px', '24px')).toMatchSnapshot()
  })
  it('properly applies values when passed three', () => {
    expect(borderWidth('12px', '24px', '36px')).toMatchSnapshot()
  })
  it('properly applies values when passed four', () => {
    expect(borderWidth('12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
})
