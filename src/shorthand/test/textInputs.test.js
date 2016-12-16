import textInputs from '../textInputs'

describe('textInputs', function() {
  it('populates all base text input selectors', function() {
    expect({[textInputs()]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates all active text input selectors', function() {
    expect({[textInputs('active')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates all focus text input selectors', function() {
    expect({[textInputs('focus')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates all hover text input selectors', function() {
    expect({[textInputs('hover')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('throws an error when passed a state it does not recognize', function() {
    expect(
      function () { return {[textInputs('clicked')]: {'border-color': 'black'}} }
    ).toThrow('textInputs only accepts the following state: "active", "focus", or "hover". You can also pass no state at all.')
  })
})
