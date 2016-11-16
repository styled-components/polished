import timingFunctions from '../timingFunctions'

describe('timingFunctions', function() {

  it('should return easeInBack cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInBack')
    }).toMatchSnapshot()
  })

  it('should return easeInCirc cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInCirc')
    }).toMatchSnapshot()
  })

  it('should return easeInCubic cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInCubic')
    }).toMatchSnapshot()
  })

  it('should return easeInExpo cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInExpo')
    }).toMatchSnapshot()
  })

  it('should return easeInQuad cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInQuad')
    }).toMatchSnapshot()
  })

  it('should return easeInQuart cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInQuart')
    }).toMatchSnapshot()
  })

  it('should return easeInQuint cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInQuint')
    }).toMatchSnapshot()
  })

  it('should return easeInSine cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInSine')
    }).toMatchSnapshot()
  })

  it('should return easeOutBack cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeOutBack')
    }).toMatchSnapshot()
  })

  it('should return easeOutCirc cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeOutCirc')
    }).toMatchSnapshot()
  })

  it('should return easeOutCubic cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeOutCubic')
    }).toMatchSnapshot()
  })

  it('should return easeOutExpo cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeOutExpo')
    }).toMatchSnapshot()
  })

  it('should return easeOutQuad cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeOutQuad')
    }).toMatchSnapshot()
  })

  it('should return easeOutQuart cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeOutQuart')
    }).toMatchSnapshot()
  })

  it('should return easeOutQuint cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeOutQuint')
    }).toMatchSnapshot()
  })

  it('should return easeOutSine cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeOutSine')
    }).toMatchSnapshot()
  })

  it('should return easeInOutBack cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInOutBack')
    }).toMatchSnapshot()
  })

  it('should return easeInOutCirc cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInOutCirc')
    }).toMatchSnapshot()
  })

  it('should return easeInOutCubic cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInOutCubic')
    }).toMatchSnapshot()
  })

  it('should return easeInOutExpo cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInOutExpo')
    }).toMatchSnapshot()
  })

  it('should return easeInOutQuad cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInOutQuad')
    }).toMatchSnapshot()
  })

  it('should return easeInOutQuart cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInOutQuart')
    }).toMatchSnapshot()
  })

  it('should return easeInOutQuint cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInOutQuint')
    }).toMatchSnapshot()
  })

  it('should return easeInOutSine cubic-bezier', function() {
    expect({
      'transition-timing-function' : timingFunctions('easeInOutSine')
    }).toMatchSnapshot()
  })

})
