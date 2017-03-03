// @flow
import timingFunctions from '../timingFunctions'

describe('timingFunctions', () => {
  it('should return easeInBack cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInBack'),
    }).toMatchSnapshot()
  })

  it('should return easeInCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInCirc'),
    }).toMatchSnapshot()
  })

  it('should return easeInCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInCubic'),
    }).toMatchSnapshot()
  })

  it('should return easeInExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInExpo'),
    }).toMatchSnapshot()
  })

  it('should return easeInQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInQuad'),
    }).toMatchSnapshot()
  })

  it('should return easeInQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInQuart'),
    }).toMatchSnapshot()
  })

  it('should return easeInQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInQuint'),
    }).toMatchSnapshot()
  })

  it('should return easeInSine cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInSine'),
    }).toMatchSnapshot()
  })

  it('should return easeOutBack cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutBack'),
    }).toMatchSnapshot()
  })

  it('should return easeOutCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutCirc'),
    }).toMatchSnapshot()
  })

  it('should return easeOutCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutCubic'),
    }).toMatchSnapshot()
  })

  it('should return easeOutExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutExpo'),
    }).toMatchSnapshot()
  })

  it('should return easeOutQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutQuad'),
    }).toMatchSnapshot()
  })

  it('should return easeOutQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutQuart'),
    }).toMatchSnapshot()
  })

  it('should return easeOutQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutQuint'),
    }).toMatchSnapshot()
  })

  it('should return easeOutSine cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeOutSine'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutBack cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutBack'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutCirc'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutCubic'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutExpo'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutQuad'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutQuart'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutQuint'),
    }).toMatchSnapshot()
  })

  it('should return easeInOutSine cubic-bezier', () => {
    expect({
      'transition-timing-function': timingFunctions('easeInOutSine'),
    }).toMatchSnapshot()
  })
})
