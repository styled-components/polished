// @flow
import ellipsis from '../ellipsis'

describe('ellipsis', () => {
  it('should pass parameter to the value of max-width', () => {
    expect(ellipsis('300px')).toMatchSnapshot()
  })

  it('should pass parameter of type integer to the value of max-width', () => {
    expect(ellipsis(300)).toMatchSnapshot()
  })

  it('should default lines to 1 and max-width to 100%', () => {
    expect(ellipsis()).toMatchSnapshot()
  })

  it('should truncate text after 3 lines', () => {
    expect(ellipsis(null, 3)).toMatchSnapshot()
  })

  it('should truncate text after 3 lines and 500px max-width', () => {
    expect(ellipsis('500px', 3)).toMatchSnapshot()
  })
})
