// @flow
import timingFunctions from '../timingFunctions'

describe('timingFunctions', () => {
  it('should return easeInBack cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInBack'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
    })
  })

  it('should return easeInCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInCirc'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
    })
  })

  it('should return easeInCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInCubic'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
    })
  })

  it('should return easeInExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInExpo'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
    })
  })

  it('should return easeInQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInQuad'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
    })
  })

  it('should return easeInQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInQuart'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
    })
  })

  it('should return easeInQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInQuint'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
    })
  })

  it('should return easeInSine cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInSine'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
    })
  })

  it('should return easeOutBack cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutBack'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
    })
  })

  it('should return easeOutCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutCirc'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
    })
  })

  it('should return easeOutCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutCubic'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
    })
  })

  it('should return easeOutExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutExpo'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
    })
  })

  it('should return easeOutQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutQuad'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
    })
  })

  it('should return easeOutQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutQuart'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
    })
  })

  it('should return easeOutQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutQuint'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
    })
  })

  it('should return easeOutSine cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutSine'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',
    })
  })

  it('should return easeInOutBack cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutBack'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
    })
  })

  it('should return easeInOutCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutCirc'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
    })
  })

  it('should return easeInOutCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutCubic'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
    })
  })

  it('should return easeInOutExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutExpo'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
    })
  })

  it('should return easeInOutQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutQuad'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
    })
  })

  it('should return easeInOutQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutQuart'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
    })
  })

  it('should return easeInOutQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutQuint'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
    })
  })

  it('should return easeInOutSine cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutSine'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.445,  0.050, 0.550, 0.950)',
    })
  })
})
