// @flow
import stripUnit from '../stripUnit'

describe('stripUnit', () => {
  it('should strip px from whole values', () => {
    expect({ '--dimension': stripUnit('1px') }).toMatchSnapshot()
  })

  it('should strip px from values', () => {
    expect({ '--dimension': stripUnit('1.5px') }).toMatchSnapshot()
  })

  it('should strip pt from whole values', () => {
    expect({ '--dimension': stripUnit('1pt') }).toMatchSnapshot()
  })

  it('should strip pt from values', () => {
    expect({ '--dimension': stripUnit('1.5pt') }).toMatchSnapshot()
  })

  it('should strip pc from whole values', () => {
    expect({ '--dimension': stripUnit('1pc') }).toMatchSnapshot()
  })

  it('should strip pc from values', () => {
    expect({ '--dimension': stripUnit('1.5pc') }).toMatchSnapshot()
  })

  it('should strip mm from whole values', () => {
    expect({ '--dimension': stripUnit('1mm') }).toMatchSnapshot()
  })

  it('should strip mm from values', () => {
    expect({ '--dimension': stripUnit('1.5mm') }).toMatchSnapshot()
  })

  it('should strip q from whole values', () => {
    expect({ '--dimension': stripUnit('1q') }).toMatchSnapshot()
  })

  it('should strip q from values', () => {
    expect({ '--dimension': stripUnit('1.5q') }).toMatchSnapshot()
  })

  it('should strip cm from whole values', () => {
    expect({ '--dimension': stripUnit('1cm') }).toMatchSnapshot()
  })

  it('should strip cm from values', () => {
    expect({ '--dimension': stripUnit('1.5cm') }).toMatchSnapshot()
  })

  it('should strip in from whole values', () => {
    expect({ '--dimension': stripUnit('1in') }).toMatchSnapshot()
  })

  it('should strip in from values', () => {
    expect({ '--dimension': stripUnit('1.5in') }).toMatchSnapshot()
  })

  it('should strip em from whole value', () => {
    expect({ '--dimension': stripUnit('1em') }).toMatchSnapshot()
  })

  it('should strip em from decimal values', () => {
    expect({ '--dimension': stripUnit('1.2em') }).toMatchSnapshot()
  })

  it('should strip rem from whole values', () => {
    expect({ '--dimension': stripUnit('1rem') }).toMatchSnapshot()
  })

  it('should strip rem from decimal values', () => {
    expect({ '--dimension': stripUnit('1.2rem') }).toMatchSnapshot()
  })

  it('should strip ex from whole values', () => {
    expect({ '--dimension': stripUnit('1ex') }).toMatchSnapshot()
  })

  it('should strip ex from decimal values', () => {
    expect({ '--dimension': stripUnit('1.2ex') }).toMatchSnapshot()
  })

  it('should strip ch from whole values', () => {
    expect({ '--dimension': stripUnit('1ch') }).toMatchSnapshot()
  })

  it('should strip ch from decimal values', () => {
    expect({ '--dimension': stripUnit('1.2ch') }).toMatchSnapshot()
  })

  it('should strip vh from whole values', () => {
    expect({ '--dimension': stripUnit('100vh') }).toMatchSnapshot()
  })

  it('should strip vh from decimal values', () => {
    expect({ '--dimension': stripUnit('33.33vh') }).toMatchSnapshot()
  })

  it('should strip vw from whole values', () => {
    expect({ '--dimension': stripUnit('100vw') }).toMatchSnapshot()
  })

  it('should strip vw from decimal values', () => {
    expect({ '--dimension': stripUnit('33.33vw') }).toMatchSnapshot()
  })

  it('should strip vmin from whole values', () => {
    expect({ '--dimension': stripUnit('100vmin') }).toMatchSnapshot()
  })

  it('should strip vmin from decimal values', () => {
    expect({ '--dimension': stripUnit('33.33vmin') }).toMatchSnapshot()
  })

  it('should strip vmax from whole values', () => {
    expect({ '--dimension': stripUnit('100vmax') }).toMatchSnapshot()
  })

  it('should strip vmax from decimal values', () => {
    expect({ '--dimension': stripUnit('33.33vmax') }).toMatchSnapshot()
  })

  it('should strip % from whole values', () => {
    expect({ '--dimension': stripUnit('80%') }).toMatchSnapshot()
  })

  it('should strip % from decimal values', () => {
    expect({ '--dimension': stripUnit('33.3%') }).toMatchSnapshot()
  })

  it('should return a unitless value when passed one', () => {
    expect({ '--dimension': stripUnit('100') }).toMatchSnapshot()
  })

  it('should return an untouched string when passed', () => {
    expect({ '--dimension': stripUnit('red') }).toMatchSnapshot()
  })
})
