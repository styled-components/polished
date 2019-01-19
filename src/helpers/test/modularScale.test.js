// @flow
import modularScale, { ratioNames } from '../modularScale'

describe('modularScale', () => {
  it('should throw an error if no steps are provided', () => {
    // $FlowFixMe
    expect(() => ({ 'font-size': modularScale() })).toThrow()
  })

  it('should use perfect fourth and 1em base by default', () => {
    expect({ 'font-size': modularScale(1) }).toMatchSnapshot()
    expect({ 'font-size': modularScale(2) }).toMatchSnapshot()
    expect({ 'font-size': modularScale(0) }).toMatchSnapshot()
  })

  it('should allow adjusting the base', () => {
    expect({ 'font-size': modularScale(1, '2em') }).toMatchSnapshot()
  })

  it('should allow rems as a base', () => {
    expect({ 'font-size': modularScale(1, '2rem') }).toMatchSnapshot()
  })

  it('should allow adjusting the ratio', () => {
    expect({ 'font-size': modularScale(1, '1em', 1) }).toMatchSnapshot()
  })

  it('should allow any of the predefined ratio names', () => {
    Object.keys(ratioNames).forEach(ratio => {
      expect({
        'font-size': modularScale(1, '1em', ratioNames[ratio]),
      }).toMatchSnapshot()
    })
  })

  it('should throw an error if an non-rem/em base is provided', () => {
    expect(() => {
      modularScale(2, '1px')
    }).toThrow()
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
