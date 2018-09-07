// @flow
import cover from '../src/cover'

describe('cover', () => {
  it('should cover full screen when passed no parameters', () => {
    expect(cover()).toMatchSnapshot()
  })

  it('should cover full screen with an offset when passed one', () => {
    expect(cover('100px')).toMatchSnapshot()
  })
})
