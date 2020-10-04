// @flow
import modularScale, { ratioNames } from '../modularScale'

describe('modularScale', () => {
  it('should throw an error if no steps are provided', () => {
    // $FlowFixMe
    expect(() => ({ 'font-size': modularScale() })).toThrow()
  })

  it('should use perfect fourth and 1em base by default', () => {
    expect({ 'font-size': modularScale(1) }).toEqual({
      'font-size': '1.333em',
    })
    expect({ 'font-size': modularScale(2) }).toEqual({
      'font-size': '1.776889em',
    })
    expect({ 'font-size': modularScale(0) }).toEqual({
      'font-size': '1em',
    })
  })

  it('should allow adjusting the base', () => {
    expect({ 'font-size': modularScale(1, '2em') }).toEqual({
      'font-size': '2.666em',
    })
  })

  it('should allow a number as a base', () => {
    expect({ 'font-size': modularScale(1, 2) }).toEqual({
      'font-size': '2.666',
    })
  })

  it('should allow properly look up preset ratio', () => {
    expect({
      'font-size': modularScale(1, '1em', 'minorSecond'),
    }).toEqual({
      'font-size': '1.067em',
    })
  })

  it('should allow adjusting the ratio', () => {
    expect({ 'font-size': modularScale(1, '1em', 1) }).toEqual({
      'font-size': '1em',
    })
  })

  it('should allow any of the predefined ratio names', () => {
    const expectedRatio = {
      minorSecond: '1.067em',
      majorSecond: '1.125em',
      minorThird: '1.2em',
      majorThird: '1.25em',
      perfectFourth: '1.333em',
      augFourth: '1.414em',
      perfectFifth: '1.5em',
      minorSixth: '1.6em',
      goldenSection: '1.618em',
      majorSixth: '1.667em',
      minorSeventh: '1.778em',
      majorSeventh: '1.875em',
      octave: '2em',
      majorTenth: '2.5em',
      majorEleventh: '2.667em',
      majorTwelfth: '3em',
      doubleOctave: '4em',
    }
    Object.keys(ratioNames).forEach(ratio => {
      expect({
        'font-size': modularScale(1, '1em', ratioNames[ratio]),
      }).toEqual({
        'font-size': expectedRatio[ratio],
      })
    })
  })

  it('should throw an error if an invalid base is provided', () => {
    expect(() => {
      modularScale(2, 'invalid')
    }).toThrow()
  })

  it('should throw an error if an invalid ratio is provided', () => {
    expect(() => {
      // $FlowFixMe
      modularScale(2, '1em', 'invalid')
    }).toThrow()
  })
})
