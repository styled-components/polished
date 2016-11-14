import hideText from '../hideText'

describe('hideText', function() {

  it('should return the CSS in JS', function() {
    expect({...hideText()}).toMatchSnapshot()
  })

  it('should add rules when block has existing rules', function() {
    expect({
      'background-image': 'url(logo.png)',
      ...hideText()
    }).toMatchSnapshot()
  })

})
