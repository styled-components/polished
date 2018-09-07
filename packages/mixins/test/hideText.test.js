// @flow
import hideText from '../src/hideText'

describe('hideText', () => {
  it('should return the CSS in JS', () => {
    expect({ ...hideText() }).toMatchSnapshot()
  })

  it('should add rules when block has existing rules', () => {
    expect({
      'background-image': 'url(logo.png)',
      ...hideText(),
    }).toMatchSnapshot()
  })
})
