// @flow
import borderColor from '../borderColor'

describe('borderColor', function() {
  it('properly applies a value when passed only one', function() {
    expect(borderColor('red')).toMatchSnapshot()
  })
  it('properly applies values when passed two', function() {
    expect(borderColor('red', 'blue')).toMatchSnapshot()
  })
  it('properly applies values when passed three', function() {
    expect(borderColor('red', 'blue', 'green')).toMatchSnapshot()
  })
  it('properly applies values when passed four', function() {
    expect(borderColor('red', 'blue', 'green', 'yellow')).toMatchSnapshot()
  })
})
