// @flow
import easeInOut from '../easeInOut'

describe('easeInOut', () => {
  it('should return easeInOutBack cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('back'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
    })
  })

  it('should return easeInOutCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('circ'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
    })
  })

  it('should return easeInOutCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('cubic'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
    })
  })

  it('should return easeInOutExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('expo'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
    })
  })

  it('should return easeInOutQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('quad'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
    })
  })

  it('should return easeInOutQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('quart'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
    })
  })

  it('should return easeInOutQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('quint'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
    })
  })
})
