// @flow
import hideText from '../hideText'

describe('hideText', () => {
  it('should return the CSS in JS', () => {
    expect({ ...hideText() }).toEqual({
      overflow: 'hidden',
      textIndent: '101%',
      whiteSpace: 'nowrap',
    })
  })

  it('should add rules when block has existing rules', () => {
    expect({
      ...hideText(),
      'background-image': 'url(logo.png)',
    }).toEqual({
      'background-image': 'url(logo.png)',
      overflow: 'hidden',
      textIndent: '101%',
      whiteSpace: 'nowrap',
    })
  })
})
