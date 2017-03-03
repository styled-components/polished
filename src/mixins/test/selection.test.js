// @flow
import selection from '../selection'

describe('selection', () => {
  const styles = {
    'background-color': 'blue',
  }

  it('should properly pass styles object and parent', () => {
    expect({
      div: {
        ...selection(styles, 'section'),
      },
    }).toMatchSnapshot()
  })

  it('should properly add rules when block has existing rules', () => {
    expect({
      div: {
        'background': 'white',
        ...selection(styles, 'section'),
      },
    }).toMatchSnapshot()
  })

  it('should properly default to no parent when not passed one', () => {
    expect({
      div: {
        ...selection(styles),
      },
    }).toMatchSnapshot()
  })
})
