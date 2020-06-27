// @flow
import cover from '../cover'

describe('cover', () => {
  it('should cover full screen when passed no parameters', () => {
    expect(cover()).toEqual({
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    })
  })

  it('should cover full screen with an offset when passed one', () => {
    expect(cover('100px')).toEqual({
      bottom: '100px',
      left: '100px',
      position: 'absolute',
      right: '100px',
      top: '100px',
    })
  })
})
