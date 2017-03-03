// @flow
import animation from '../animation'

describe('animation', () => {
  describe('single mode', () => {
    it('should pass first eight arguments to the CSS', () => {
      expect({ ...animation('rotate', '1s', 'ease-in-out', '0.5s', 5, 'reverse', 'forwards', 'paused') }).toMatchSnapshot()
    })

    it('should be fine with less than eight arguments', () => {
      expect({ ...animation('rotate', '1s', 'ease-in-out') }).toMatchSnapshot()
    })

    it('should throw an error if more than eight elements are supplied', () => {
      expect(() => { animation('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'oops') }).toThrow()
    })
  })

  describe('multi mode', () => {
    it('should pass first eight arguments to the CSS in multi mode', () => {
      expect({ ...animation(['rotate', '1s', 'ease-in-out', '0.5s', 5, 'reverse', 'forwards', 'paused']) }).toMatchSnapshot()
    })

    it('should be fine with less than eight arguments', () => {
      expect({ ...animation(['rotate', '1s', 'ease-in-out']) }).toMatchSnapshot()
    })

    it('should be fine with multiple animations', () => {
      expect({ ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s']) }).toMatchSnapshot()
    })

    it('should throw an error if more than eight elements are supplied in an array', () => {
      expect(() => { animation(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'oops']) }).toThrow()
    })

    it('should throw an error if more than eight elements are supplied in a second array', () => {
      expect(() => { animation(['rotate'], ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'oops']) }).toThrow()
    })
  })

  it('should not allow arrays in single mode', () => {
    expect(() => { animation('rotate', ['move', '2s'], '1s') }).toThrow()
  })

  it('should not allow simple root level values in multi mode', () => {
    expect(() => { animation(['move', '2s'], 'rotate', '2s') }).toThrow()
  })
})
