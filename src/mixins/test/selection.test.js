// @flow
import selection from '../selection'

describe('selection', function() {

  const styles = {
    'background-color': 'blue',
  }

  it('should properly pass styles object and parent', function() {
    expect({
      div: {
        ...selection(styles, 'section')
      }
    }).toMatchSnapshot()
  })

  it('should properly add rules when block has existing rules', function() {
    expect({
      div: {
        'background': 'white',
        ...selection(styles, 'section')
      }
    }).toMatchSnapshot()
  })

  it('should properly default to no parent when not passed one', function() {
    expect({
      div: {
        ...selection(styles)
      }
    }).toMatchSnapshot()
  })

})
