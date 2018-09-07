// @flow
import triangle from '../src/triangle'

describe('triangle', () => {
  it('should generate a proper triangle when passed all parameters', () => {
    expect({
      ...triangle({
        foregroundColor: 'red',
        backgroundColor: 'black',
        pointingDirection: 'right',
        height: 10,
        width: 20,
      }),
    }).toMatchSnapshot()
  })

  it('should generate a proper triangle when passed all parameters with units on width/height', () => {
    expect({
      ...triangle({
        foregroundColor: 'red',
        backgroundColor: 'black',
        pointingDirection: 'right',
        height: '10em',
        width: '20em',
      }),
    }).toMatchSnapshot()
  })

  it('should default to a transparent background when not passed a backgroundColor', () => {
    expect({
      ...triangle({
        foregroundColor: 'red',
        pointingDirection: 'right',
        height: 10,
        width: 20,
      }),
    }).toMatchSnapshot()
  })

  it('should generate a proper triangle when passed string values for height and width', () => {
    expect({
      ...triangle({
        foregroundColor: 'red',
        backgroundColor: 'black',
        pointingDirection: 'right',
        height: '10px',
        width: '20px',
      }),
    }).toMatchSnapshot()
  })

  it('should properly add rules when block has existing rules', () => {
    expect({
      background: 'red',
      ...triangle({
        foregroundColor: 'grey',
        pointingDirection: 'right',
        height: 10,
        width: 20,
      }),
    }).toMatchSnapshot()
  })

  it('should properly render top pointing arrow with green foregroundColor, width of 20px and height 20px', () => {
    expect({
      ...triangle({
        foregroundColor: 'green',
        pointingDirection: 'top',
        height: 20,
        width: 20,
      }),
    }).toMatchSnapshot()
  })

  it('should properly render right pointing arrow with width of 20px and height 10px', () => {
    expect({
      ...triangle({
        foregroundColor: 'red',
        pointingDirection: 'right',
        height: 10,
        width: 20,
      }),
    }).toMatchSnapshot()
  })

  it('should properly render bottom pointing arrow with red foregroundColor, width of 20px and height 20px', () => {
    expect({
      ...triangle({
        foregroundColor: 'red',
        pointingDirection: 'bottom',
        height: 20,
        width: 10,
      }),
    }).toMatchSnapshot()
  })

  it('should properly render left pointing arrow with blue foregroundColor, width of 10px and height 20px', () => {
    expect({
      ...triangle({
        foregroundColor: 'blue',
        pointingDirection: 'left',
        height: 20,
        width: 10,
      }),
    }).toMatchSnapshot()
  })

  it('should throw an error when pointingDirection is not provided', () => {
    expect(() => {
      // $FlowFixMe
      triangle({
        foregroundColor: 'blue',
        height: 20,
        width: 10,
      })
    }).toThrow("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.")
  })

  it('should throw an error when pointingDirection does not match corresponding options', () => {
    expect(() => {
      // $FlowFixMe
      triangle({
        foregroundColor: 'blue',
        height: 20,
        width: 10,
        pointingDirection: false,
      })
    }).toThrow("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.")
  })

  it('should throw an error when height or width is not a unit based value.', () => {
    expect(() => {
      triangle({
        foregroundColor: 'blue',
        height: 'inherit',
        width: 'inherit',
        pointingDirection: 'bottom',
      })
    }).toThrow('Passed an invalid value to `height` or `width`. Please provide a pixel based unit')
  })
})
