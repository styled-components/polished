// @flow
import placeholder from '../placeholder'

describe('placeholder', function() {

  const styles = {
    'color': 'blue',
  }

  it('should properly pass styles object and parent', function() {
    expect({
      ...placeholder(styles,'input')
<<<<<<< HEAD
=======
    const styles = {
      'color': 'blue',
      'font-size': '12px',
    }

  it('should properly pass styles object and parent', function() {
    expect({
      input: {
        ...placeholder(styles,'input')
      }
>>>>>>> 088995e... chore(placeholder): Add placeholder mixin
=======
>>>>>>> 09e8acf... chore(all): More merge conflicts
    }).toMatchSnapshot()
  })

  it('should properly add rules when block has existing rules', function() {
    expect({
      'background': 'white',
      ...placeholder(styles,'input')
<<<<<<< HEAD
=======
      input: {
        'background': 'white',
        ...placeholder(styles,'input')
      }
>>>>>>> 088995e... chore(placeholder): Add placeholder mixin
=======
>>>>>>> 09e8acf... chore(all): More merge conflicts
    }).toMatchSnapshot()
  })

  it('should properly default to & when not passed a parent', function() {
    expect({
      input: {
        ...placeholder(styles)
      }
    }).toMatchSnapshot()
  })

})
