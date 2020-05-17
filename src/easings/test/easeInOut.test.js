// @flow
import easeInOut from '../easeInOut'

describe('easeInOut', () => {
  it('should return easeInOutBack cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('back'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('circ'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('cubic'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('expo'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('quad'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('quart'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('quint'),
    }).toMatchSnapshot()
  })
})
