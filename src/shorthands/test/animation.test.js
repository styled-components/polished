// @flow
import animation from '../animation'

describe('animation', function() {
  describe('single mode', function() {
    it('should pass first eight arguments to the CSS', function() {
      expect({ ...animation('rotate', '1s', 'ease-in-out', '0.5s', 5, 'reverse', 'forwards', 'paused') }).toMatchSnapshot()
    })

    it('should be fine with less than eight arguments', function() {
      expect({ ...animation('rotate', '1s', 'ease-in-out') }).toMatchSnapshot()
    })

    it('should throw an error if more than eight elements are supplied', function() {
      expect(function () { animation('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'oops') }).toThrow()
    })
  })

  describe('multi mode', function() {
    it('should pass first eight arguments to the CSS in multi mode', function() {
      expect({ ...animation(['rotate', '1s', 'ease-in-out', '0.5s', 5, 'reverse', 'forwards', 'paused']) }).toMatchSnapshot()
    })

    it('should be fine with less than eight arguments', function() {
      expect({ ...animation(['rotate', '1s', 'ease-in-out']) }).toMatchSnapshot()
    })

    it('should be fine with multiple animations', function() {
      expect({ ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s']) }).toMatchSnapshot()
    })

    it('should throw an error if more than eight elements are supplied in an array', function() {
      expect(function () { animation(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'oops']) }).toThrow()
    })

    it('should throw an error if more than eight elements are supplied in a second array', function() {
      expect(function () { animation(['rotate'], ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'oops']) }).toThrow()
    })
  })

  it('should not allow arrays in single mode', function() {
    expect(function () { animation('rotate', ['move', '2s'], '1s') }).toThrow()
  })

  it('should not allow simple root level values in multi mode', function() {
    expect(function () { animation(['move', '2s'], 'rotate', '2s') }).toThrow()
  })
})
