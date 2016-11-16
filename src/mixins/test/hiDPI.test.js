import hiDPI from '../hiDPI'

describe('hiDPI', function() {

  it('should pass ratio to media query', function() {
    expect({
      [hiDPI(1.5)]: {
        'width': '200px'
      }
    }).toMatchSnapshot()
  })

  it('should set a default ratio of 1.3 when no ratio is passed', function() {
    expect({
      [hiDPI()]: {
        'width': '200px'
      }
    }).toMatchSnapshot()
  })

})
