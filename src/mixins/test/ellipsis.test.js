// @flow
import ellipsis from '../ellipsis'

describe('ellipsis', () => {
  it('should pass parameter to the value of max-width', () => {
    expect({ ...ellipsis('300px') }).toMatchSnapshot()
  })

  it('should properly add rules when block has existing rules', () => {
    expect({
      background: 'red',
      ...ellipsis('300px'),
    }).toMatchSnapshot()
  })

  it('should default max-width to 100%', () => {
    expect({ ...ellipsis() }).toMatchSnapshot()
  })
})
