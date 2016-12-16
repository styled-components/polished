import textInputs from '../textInputs'

describe('textInputs', function() {
  it('populates base text input selectors', function() {
    expect({[textInputs()]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates text input selectors for a single state', function() {
    expect({[textInputs('active')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates both base selectors and selectors for a single state', function() {
    expect({[textInputs(null, 'focus')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates text input selectors for multiple states', function() {
    expect({[textInputs('active', 'focus')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('throws an error when passed a state it does not recognize', function() {
    expect(
      function () { return {[textInputs('clicked')]: {'border-color': 'black'}} }
    ).toThrow('You passed an unsupported selector state to this method')
  })
})
