// @flow
import placeholder from '../placeholder'

describe('placeholder', () => {
  const styles = {
    'color': 'blue',
  }

  it('should properly pass styles object and parent', () => {
    expect({
      ...placeholder(styles, 'input'),
    }).toMatchSnapshot()
  })

  it('should properly add rules when block has existing rules', () => {
    expect({
      'background': 'white',
      ...placeholder(styles, 'input'),
    }).toMatchSnapshot()
  })

  it('should properly default to & when not passed a parent', () => {
    expect({
      input: {
        ...placeholder(styles),
      },
    }).toMatchSnapshot()
  })
})
