// @flow
import stripUnit from '../stripUnit'

describe('stripUnit', () => {
  // Number Returns
  it('should strip px from whole values', () => {
    expect({ '--dimension': stripUnit('1px') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1px', true) }).toMatchSnapshot()
  })

  it('should strip px from values', () => {
    expect({ '--dimension': stripUnit('1.5px') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1.5px', true) }).toMatchSnapshot()
  })

  it('should strip pt from whole values', () => {
    expect({ '--dimension': stripUnit('1pt') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1pt', true) }).toMatchSnapshot()
  })

  it('should strip pt from values', () => {
    expect({ '--dimension': stripUnit('1.5pt') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1.5pt', true) }).toMatchSnapshot()
  })

  it('should strip pc from whole values', () => {
    expect({ '--dimension': stripUnit('1pc') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1pc', true) }).toMatchSnapshot()
  })

  it('should strip pc from values', () => {
    expect({ '--dimension': stripUnit('1.5pc') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1.5pc', true) }).toMatchSnapshot()
  })

  it('should strip mm from whole values', () => {
    expect({ '--dimension': stripUnit('1mm') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1mm', true) }).toMatchSnapshot()
  })

  it('should strip mm from values', () => {
    expect({ '--dimension': stripUnit('1.5mm') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1.5mm', true) }).toMatchSnapshot()
  })

  it('should strip q from whole values', () => {
    expect({ '--dimension': stripUnit('1q') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1q', true) }).toMatchSnapshot()
  })

  it('should strip q from values', () => {
    expect({ '--dimension': stripUnit('1.5q') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1.5q', true) }).toMatchSnapshot()
  })

  it('should strip cm from whole values', () => {
    expect({ '--dimension': stripUnit('1cm') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1cm', true) }).toMatchSnapshot()
  })

  it('should strip cm from values', () => {
    expect({ '--dimension': stripUnit('1.5cm') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1.5cm', true) }).toMatchSnapshot()
  })

  it('should strip in from whole values', () => {
    expect({ '--dimension': stripUnit('1in') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1in', true) }).toMatchSnapshot()
  })

  it('should strip in from values', () => {
    expect({ '--dimension': stripUnit('1.5in') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1.5in', true) }).toMatchSnapshot()
  })

  it('should strip em from whole value', () => {
    expect({ '--dimension': stripUnit('1em') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1em', true) }).toMatchSnapshot()
  })

  it('should strip em from decimal values', () => {
    expect({ '--dimension': stripUnit('1.2em') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1.2em', true) }).toMatchSnapshot()
  })

  it('should strip rem from whole values', () => {
    expect({ '--dimension': stripUnit('1rem') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1rem', true) }).toMatchSnapshot()
  })

  it('should strip rem from decimal values', () => {
    expect({ '--dimension': stripUnit('1.2rem') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1.2rem', true) }).toMatchSnapshot()
  })

  it('should strip ex from whole values', () => {
    expect({ '--dimension': stripUnit('1ex') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1ex', true) }).toMatchSnapshot()
  })

  it('should strip ex from decimal values', () => {
    expect({ '--dimension': stripUnit('1.2ex') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1.2ex', true) }).toMatchSnapshot()
  })

  it('should strip ch from whole values', () => {
    expect({ '--dimension': stripUnit('1ch') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1ch', true) }).toMatchSnapshot()
  })

  it('should strip ch from decimal values', () => {
    expect({ '--dimension': stripUnit('1.2ch') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('1.2ch', true) }).toMatchSnapshot()
  })

  it('should strip vh from whole values', () => {
    expect({ '--dimension': stripUnit('100vh') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('100vh', true) }).toMatchSnapshot()
  })

  it('should strip vh from decimal values', () => {
    expect({ '--dimension': stripUnit('33.33vh') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('33.33vh', true) }).toMatchSnapshot()
  })

  it('should strip vw from whole values', () => {
    expect({ '--dimension': stripUnit('100vw') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('100vw', true) }).toMatchSnapshot()
  })

  it('should strip vw from decimal values', () => {
    expect({ '--dimension': stripUnit('33.33vw') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('33.33vw', true) }).toMatchSnapshot()
  })

  it('should strip vmin from whole values', () => {
    expect({ '--dimension': stripUnit('100vmin') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('100vmin', true) }).toMatchSnapshot()
  })

  it('should strip vmin from decimal values', () => {
    expect({ '--dimension': stripUnit('33.33vmin') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('33.33vmin', true) }).toMatchSnapshot()
  })

  it('should strip vmax from whole values', () => {
    expect({ '--dimension': stripUnit('100vmax') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('100vmax', true) }).toMatchSnapshot()
  })

  it('should strip vmax from decimal values', () => {
    expect({ '--dimension': stripUnit('33.33vmax') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('33.33vmax', true) }).toMatchSnapshot()
  })

  it('should strip % from whole values', () => {
    expect({ '--dimension': stripUnit('80%') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('80%', true) }).toMatchSnapshot()
  })

  it('should strip % from decimal values', () => {
    expect({ '--dimension': stripUnit('33.3%') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('33.3%', true) }).toMatchSnapshot()
  })

  it('should return a unitless value when passed', () => {
    expect({ '--dimension': stripUnit('33') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('33', true) }).toMatchSnapshot()
    // $FlowFixMe
    expect({ '--dimension': stripUnit(33) }).toMatchSnapshot()
    // $FlowFixMe
    expect({ '--dimension': stripUnit(33, true) }).toMatchSnapshot()
  })

  it('should return invalid value when passed', () => {
    expect({ '--dimension': stripUnit('blah') }).toMatchSnapshot()
    expect({ '--dimension': stripUnit('blah', true) }).toMatchSnapshot()
  })
})
