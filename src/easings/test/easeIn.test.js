// @flow
import easeIn from '../easeIn'

describe('easeIn', () => {
  it('should return easeInBack cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('back'),
    }).toMatchSnapshot()
  })

  it('should return easeInCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('circ'),
    }).toMatchSnapshot()
  })

  it('should return easeInCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('cubic'),
    }).toMatchSnapshot()
  })

  it('should return easeInExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('expo'),
    }).toMatchSnapshot()
  })

  it('should return easeInQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('quad'),
    }).toMatchSnapshot()
  })

  it('should return easeInQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('quart'),
    }).toMatchSnapshot()
  })

  it('should return easeInQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('quint'),
    }).toMatchSnapshot()
  })

  it('should return easeInSine cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('sine'),
    }).toMatchSnapshot()
  })
})
