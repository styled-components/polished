// @flow
import buttons from '../buttons'

describe('buttons', function() {
  it('populates base button selectors', function() {
    expect({[buttons()]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates buttons selectors for a single state', function() {
    expect({[buttons('active')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates both base selectors and selectors for a single state', function() {
    expect({[buttons(null, 'focus')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates button selectors for multiple states', function() {
    expect({[buttons('active', 'focus')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('throws an error when passed a state it does not recognize', function() {
    expect(
      function () { return {[buttons('clicked')]: {'border-color': 'black'}} }
    ).toThrow('You passed an unsupported selector state to this method')
  })
})
