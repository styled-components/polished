import ellipsis from '../ellipsis'

describe('ellipsis', function() {

  it('should pass parameter to the value of max-width', function() {
    expect({...ellipsis('300px')}).toMatchSnapshot()
  })

  it('should properly add rules when block has existing rules', function() {
    expect({
      background: 'red',
      ...ellipsis('300px')
    }).toMatchSnapshot()
  })

  it('should default max-width to 100%', function() {
    expect({...ellipsis()}).toMatchSnapshot()
  })

})
