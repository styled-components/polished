// @flow
import ellipsis from '../ellipsis'

describe('ellipsis', () => {
  it('should pass parameter to the value of max-width', () => {
    expect({ ...ellipsis('300px') }).toMatchSnapshot()
  })

  it('should pass parameter of type integer to the value of max-width', () => {
    expect({ ...ellipsis(300) }).toMatchSnapshot()
  })

  it('should default max-width to 100%', () => {
    expect({ ...ellipsis() }).toMatchSnapshot()
  })
})
