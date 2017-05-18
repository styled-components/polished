// @flow
import stripUnit from '../stripUnit'

describe('stripUnit', () => {
  // Number Returns
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

  // Array Returns

  it('should return a unitless value and the corresponding unit when passed a px value', () => {
    expect(stripUnit('1px', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal px value', () => {
    expect(stripUnit('1.5px', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a pt value', () => {
    expect(stripUnit('1pt', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal pt value', () => {
    expect(stripUnit('1.5pt', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a pc value', () => {
    expect(stripUnit('1pc', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal pc value', () => {
    expect(stripUnit('1.5pc', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a mm value', () => {
    expect(stripUnit('1mm', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal mm value', () => {
    expect(stripUnit('1.5mm', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a q value', () => {
    expect(stripUnit('1q', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal q value', () => {
    expect(stripUnit('1.5q', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a cm value', () => {
    expect(stripUnit('1cm', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal cm value', () => {
    expect(stripUnit('1.5cm', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a in value', () => {
    expect(stripUnit('1in', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal in value', () => {
    expect(stripUnit('1.5in', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a em value', () => {
    expect(stripUnit('1em', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal em value', () => {
    expect(stripUnit('1.5em', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a rem value', () => {
    expect(stripUnit('1rem', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal rem value', () => {
    expect(stripUnit('1.5rem', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a ex value', () => {
    expect(stripUnit('1ex', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal ex value', () => {
    expect(stripUnit('1.5ex', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a ch value', () => {
    expect(stripUnit('1ch', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal ch value', () => {
    expect(stripUnit('1.5ch', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a pvhvalue', () => {
    expect(stripUnit('1vh', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal vh value', () => {
    expect(stripUnit('1.5vh', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a vw value', () => {
    expect(stripUnit('1vw', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal vw value', () => {
    expect(stripUnit('1.5vw', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a vmin value', () => {
    expect(stripUnit('1vmin', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal vmin value', () => {
    expect(stripUnit('1.5vmin', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a vmax value', () => {
    expect(stripUnit('1vmax', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal vmax value', () => {
    expect(stripUnit('1.5vmax', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a % value', () => {
    expect(stripUnit('1%', true)).toMatchSnapshot()
  })

  it('should return a unitless value and the corresponding unit when passed a decimal % value', () => {
    expect(stripUnit('1.5%', true)).toMatchSnapshot()
  })

  // No-Op Cases
  it('should return a unitless value when passed one', () => {
    expect({ '--dimension': stripUnit('100') }).toMatchSnapshot()
  })

  it('should return an untouched string when passed', () => {
    expect({ '--dimension': stripUnit('red') }).toMatchSnapshot()
  })

  it('should return a number when passed an integer', () => {
    expect({ '--dimension': stripUnit(100) }).toMatchSnapshot()
  })

  it('should return an untouched string and an empty string when trying to return a unit when there is not one', () => {
    expect(stripUnit('red', true)).toMatchSnapshot()
  })

  it('should return an untouched number and an empty string when trying to return a unit when there is not one', () => {
    expect(stripUnit(100, true)).toMatchSnapshot()
  })
})
