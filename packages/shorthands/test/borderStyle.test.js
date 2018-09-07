// @flow
import borderStyle from '../borderStyle'

describe('borderStyle', () => {
  it('properly applies a value when passed only one', () => {
    expect(borderStyle('solid')).toMatchSnapshot()
  })
  it('properly applies values when passed two', () => {
    expect(borderStyle('solid', 'dashed')).toMatchSnapshot()
  })
  it('properly applies values when passed three', () => {
    expect(borderStyle('solid', 'dashed', 'dotted')).toMatchSnapshot()
  })
  it('properly applies values when passed four', () => {
    expect(borderStyle('solid', 'dashed', 'dotted', 'double')).toMatchSnapshot()
  })
})
