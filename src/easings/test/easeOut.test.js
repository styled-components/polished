// @flow
import easeOut from '../easeOut'

describe('easeOut', () => {
  it('should return easeOutBack cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('back'),
    }).toMatchSnapshot()
  })

  it('should return easeOutCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('circ'),
    }).toMatchSnapshot()
  })

  it('should return easeOutCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('cubic'),
    }).toMatchSnapshot()
  })

  it('should return easeOutExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('expo'),
    }).toMatchSnapshot()
  })

  it('should return easeOutQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('quad'),
    }).toMatchSnapshot()
  })

  it('should return easeOutQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('quart'),
    }).toMatchSnapshot()
  })

  it('should return easeOutQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('quint'),
    }).toMatchSnapshot()
  })
})
