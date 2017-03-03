// @flow
import padding from '../padding'

describe('padding', () => {
  it('properly applies a value when passed only one', () => {
    expect(padding('12px')).toMatchSnapshot()
  })
  it('properly applies values when passed two', () => {
    expect(padding('12px', '24px')).toMatchSnapshot()
  })
  it('properly applies values when passed three', () => {
    expect(padding('12px', '24px', '36px')).toMatchSnapshot()
  })
  it('properly applies values when passed four', () => {
    expect(padding('12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
})
