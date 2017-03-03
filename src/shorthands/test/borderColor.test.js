// @flow
import borderColor from '../borderColor'

describe('borderColor', () => {
  it('properly applies a value when passed only one', () => {
    expect(borderColor('red')).toMatchSnapshot()
  })
  it('properly applies values when passed two', () => {
    expect(borderColor('red', 'blue')).toMatchSnapshot()
  })
  it('properly applies values when passed three', () => {
    expect(borderColor('red', 'blue', 'green')).toMatchSnapshot()
  })
  it('properly applies values when passed four', () => {
    expect(borderColor('red', 'blue', 'green', 'yellow')).toMatchSnapshot()
  })
})
