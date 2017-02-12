// @flow
import triangle from '../triangle'

describe('triangle', function() {

  it('should pass parameters to the values of color, border-width', function() {
    expect({...triangle({ color: 'red', pointingDirection: 'right', height: 10, width: 20 })}).toMatchSnapshot()
  })

  it('should properly add rules when block has existing rules', function() {
    expect({
      background: 'red',
      ...triangle({ color: 'grey', pointingDirection: 'right', height: 10, width: 20 })
    }).toMatchSnapshot()
  })

  it('should properly render top pointing arrow with green color, width of 20px and height 20px', function() {
    expect({
      ...triangle({ color: 'green', pointingDirection: 'top', height: 20, width: 20 })
    }).toMatchSnapshot()
  })

  it('should properly render right pointing arrow with width of 20px and height 10px', function() {
    expect({
      ...triangle({ color: 'red', pointingDirection: 'right', height: 10, width: 20 })
    }).toMatchSnapshot()
  })

  it('should properly render bottom pointing arrow with red color, width of 20px and height 20px', function() {
    expect({
      ...triangle({ color: 'red', pointingDirection: 'bottom', height: 20, width: 10 })
    }).toMatchSnapshot()
  })

  it('should properly render left pointing arrow with blue color, width of 10px and height 20px', function() {
    expect({
      ...triangle({ color: 'blue', pointingDirection: 'left', height: 20, width: 10 })
    }).toMatchSnapshot()
  })

  it('should throw an error when pointingDirection is not provided or does not match corresponding options', function() {
    expect(() => {
      // $FlowIgnoreNextLine since the coming is invalid code, flow complains
      triangle(
        {
          color: 'blue',
          height: 20,
          width: 10,
          poitingDirection: false,
        }
      )
    }).toThrow('Passed invalid argument to triangle, please pass correct poitingDirection e.g. \'right\'.')
  })

})
