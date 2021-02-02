// @flow
import triangle from '../triangle'

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

  it('should generate a proper triangle when passed all parameters with units on width/height with float values', () => {
    expect({
      ...triangle({
        foregroundColor: 'red',
        backgroundColor: 'black',
        pointingDirection: 'right',
        height: '10.5em',
        width: '20.5em',
      }),
    }).toMatchSnapshot()
  })

  it('should default to a transparent background when not passed a backgroundColor', () => {
    expect({
      ...triangle({
        foregroundColor: 'red',
        pointingDirection: 'right',
        height: '10px',
        width: '20px',
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

  it('should properly render top pointing arrow with green foregroundColor, width of 20px and height 20px', () => {
    expect({
      ...triangle({
        foregroundColor: 'green',
        pointingDirection: 'top',
        height: '20px',
        width: '20px',
      }),
    }).toMatchSnapshot()
  })

  it('should properly render right pointing arrow with width of 20px and height 10px', () => {
    expect({
      ...triangle({
        foregroundColor: 'red',
        pointingDirection: 'right',
        height: '10px',
        width: '20px',
      }),
    }).toMatchSnapshot()
  })

  it('should properly render bottom pointing arrow with red foregroundColor, width of 20px and height 20px', () => {
    expect({
      ...triangle({
        foregroundColor: 'red',
        pointingDirection: 'bottom',
        height: '20px',
        width: '10px',
      }),
    }).toMatchSnapshot()
  })

  it('should properly render left pointing arrow with blue foregroundColor, width of 10px and height 20px', () => {
    expect({
      ...triangle({
        foregroundColor: 'blue',
        pointingDirection: 'left',
        height: '20px',
        width: '10px',
      }),
    }).toMatchSnapshot()
  })

  it('should properly render topRight pointing arrow with blue foregroundColor, width of 20px and height 20px', () => {
    expect({
      ...triangle({
        foregroundColor: 'blue',
        pointingDirection: 'topRight',
        height: '20px',
        width: '20px',
      }),
    }).toMatchSnapshot()
  })

  it('should properly render bottomRight pointing arrow with blue foregroundColor, width of 20px and height 20px', () => {
    expect({
      ...triangle({
        foregroundColor: 'blue',
        pointingDirection: 'bottomRight',
        height: '20px',
        width: '20px',
      }),
    }).toMatchSnapshot()
  })

  it('should properly render bottomLeft pointing arrow with blue foregroundColor, width of 20px and height 20px', () => {
    expect({
      ...triangle({
        foregroundColor: 'blue',
        pointingDirection: 'bottomLeft',
        height: '20px',
        width: '20px',
      }),
    }).toMatchSnapshot()
  })

  it('should properly render topLeft pointing arrow with blue foregroundColor, width of 20px and height 20px', () => {
    expect({
      ...triangle({
        foregroundColor: 'blue',
        pointingDirection: 'topLeft',
        height: '20px',
        width: '20px',
      }),
    }).toMatchSnapshot()
  })

  it('should throw an error when pointingDirection is not provided', () => {
    expect(() => {
      // $FlowFixMe
      triangle({
        foregroundColor: 'blue',
        height: '20px',
        width: '10px',
      })
    }).toThrow(
      "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.",
    )
  })

  it('should throw an error when pointingDirection does not match corresponding options', () => {
    expect(() => {
      triangle({
        foregroundColor: 'blue',
        height: '20px',
        width: '10px',
        // $FlowFixMe
        pointingDirection: false,
      })
    }).toThrow(
      "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.",
    )
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
