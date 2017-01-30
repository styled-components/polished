// @flow
import size from '../size'

describe('size', function() {

  it('should pass parameters to the values of height and width', function() {
    expect({...size('300px', '250px')}).toMatchSnapshot()
  })

  it('should properly add rules when block has existing rules', function() {
    expect({
      background: 'red',
      ...size('300px', '250px')
    }).toMatchSnapshot()
  })

  it('should set height and width to the same value when only one parameter is passed', function() {
    expect({...size('300px')}).toMatchSnapshot()
  })

})
