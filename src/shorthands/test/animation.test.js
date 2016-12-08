// @flow
import animation from '../animation'

describe('animation', function() {
  it('should pass first eight arguments to the CSS', function() {
    expect({ ...animation('rotate', '1s', 'ease-in-out', '0.5s', 5, 'reverse', 'forwards', 'paused') }).toMatchSnapshot()
  })

  it('should be fine with less than eight arguments', function() {
    expect({ ...animation('rotate', '1s', 'ease-in-out') }).toMatchSnapshot()
  })

  it('should throw an error if more than eight arguments are supplied', function() {
    expect(function () { animation('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'oops') }).toThrow()
  })
})
