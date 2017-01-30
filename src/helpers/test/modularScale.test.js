// @flow
import modularScale, { ratioNames } from '../modularScale'

describe('modularScale', function() {
  it('should throw an error if no steps are provided', function() {
    // $FlowIgnoreNextLine since the coming is invalid code, flow complains
    expect(() => ({ 'font-size': modularScale() })).toThrow()
  })

  it('should use perfect fourth and 1em base by default', function() {
    expect({ 'font-size': modularScale(1) }).toMatchSnapshot()
  })

  it('should allow adjusting the base', function() {
    expect({ 'font-size': modularScale(1, '2em') }).toMatchSnapshot()
  })

  it('should allow adjusting the ratio', function() {
    expect({ 'font-size': modularScale(1, '1em', 1) }).toMatchSnapshot()
  })

  it('should allow any of the predefined ratio names', function() {
    Object.keys(ratioNames).forEach((ratio) => {
      expect({ 'font-size': modularScale(1, '1em', ratioNames[ratio]) }).toMatchSnapshot()
    })
  })

  it('should throw an error if an invalid base is provided', function() {
    expect(() => {
      modularScale(2, 'invalid')
    }).toThrow()
  })

  it('should throw an error if an invalid ratio is provided', function() {
    expect(() => {
      // $FlowIgnoreNextLine since the coming is invalid code, flow complains
      modularScale(2, '1em', 'invalid')
    }).toThrow()
  })
})
