// @flow
import modularScale, { ratioNames } from '../modularScale'

describe('modularScale', function() {
  it('should throw an error if no steps are provided', function() {
    expect(function() { return { 'font-size': modularScale() } }).toThrow()
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
})
