// @flow
import easeOut from '../easeOut'

describe('easeOut', () => {
  it('should return easeOutBack cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('back'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
    })
  })

  it('should return easeOutCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('circ'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
    })
  })

  it('should return easeOutCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('cubic'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
    })
  })

  it('should return easeOutExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('expo'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
    })
  })

  it('should return easeOutQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('quad'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
    })
  })

  it('should return easeOutQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('quart'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
    })
  })

  it('should return easeOutQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('quint'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
    })
  })
})
