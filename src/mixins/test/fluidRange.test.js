// @flow
import fluidRange from '../fluidRange'

describe('fluidRange', () => {
  it('should return a valid object when passed a single cssValues object and min/max screen sizes', () => {
    expect(
      fluidRange(
        {
          prop: 'padding',
          fromSize: '20px',
          toSize: '100px',
        },
        '400px',
        '1000px',
      ),
    ).toEqual({
      '@media (min-width: 1000px)': {
        padding: '100px',
      },
      '@media (min-width: 400px)': {
        padding: 'calc(-33.33px + 13.33vw)',
      },
      padding: '20px',
    })
  })

  it('should return a valid object when passed multiple cssValues in an array and min/max screen sizes', () => {
    expect(
      fluidRange(
        [
          {
            prop: 'padding',
            fromSize: '20px',
            toSize: '100px',
          },
          {
            prop: 'margin',
            fromSize: '5px',
            toSize: '25px',
          },
        ],
        '400px',
        '1000px',
      ),
    ).toEqual({
      '@media (min-width: 1000px)': {
        margin: '25px',
        padding: '100px',
      },
      '@media (min-width: 400px)': {
        margin: 'calc(-8.33px + 3.33vw)',
        padding: 'calc(-33.33px + 13.33vw)',
      },
      margin: '5px',
      padding: '20px',
    })
  })

  it('should use defaults when min/maxScreen are not passed', () => {
    expect(
      fluidRange({
        prop: 'padding',
        fromSize: '20px',
        toSize: '100px',
      }),
    ).toEqual({
      '@media (min-width: 1200px)': {
        padding: '100px',
      },
      '@media (min-width: 320px)': {
        padding: 'calc(-9.09px + 9.09vw)',
      },
      padding: '20px',
    })
  })

  // Errors
  it('should throw an error when not passed an Array or Object as the first argument', () => {
    expect(() => {
      // $FlowFixMe
      fluidRange('padding', '400px', '1000px')
    }).toThrow(
      'Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.',
    )
  })

  it('should throw an error when not passed a first argument', () => {
    expect(() => {
      // $FlowFixMe
      fluidRange(null, '400px', '1000px')
    }).toThrow(
      'Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.',
    )
  })

  it('should throw an error when the first argument is an object and does not include all required keys.', () => {
    expect(() => {
      // $FlowFixMe
      fluidRange({}, '400px', '1000px')
    }).toThrow(
      'Expects the first argument object to have the properties prop, fromSize, and toSize.',
    )
  })

  it('should throw an error when the first argument is an array of objects that do not include all required keys.', () => {
    expect(() => {
      fluidRange(
        [
          // $FlowFixMe
          {
            toSize: '100px',
          },
          // $FlowFixMe
          {
            fromSize: '5px',
          },
        ],
        '400px',
        '1000px',
      )
    }).toThrow(
      'Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.',
    )
  })

  it('should throw an error when passed non-string values for min/maxScreen', () => {
    expect(() => {
      // $FlowFixMe
      fluidRange(
        {
          prop: 'padding',
          fromSize: '20px',
          toSize: '100px',
        },
        // $FlowFixMe
        400,
        // $FlowFixMe
        1000,
      )
    }).toThrow(
      'minScreen and maxScreen must be provided as stringified numbers with the same units.',
    )
  })

  it('should throw an error when passed unitless string values for mix/maxScreen', () => {
    expect(() => {
      fluidRange(
        {
          prop: 'padding',
          fromSize: '20px',
          toSize: '100px',
        },
        'inherit',
        'initial',
      )
    }).toThrow(
      'minScreen and maxScreen must be provided as stringified numbers with the same units.',
    )
  })

  it('should throw an error when passed string values for mix/maxScreen with different units', () => {
    expect(() => {
      fluidRange(
        {
          prop: 'padding',
          fromSize: '20px',
          toSize: '100px',
        },
        '100px',
        '100%',
      )
    }).toThrow(
      'minScreen and maxScreen must be provided as stringified numbers with the same units.',
    )
  })

  it('should throw an error when passed string values for mix/maxScreen with different units', () => {
    expect(() => {
      fluidRange(
        {
          prop: 'padding',
          fromSize: '20px',
          toSize: '100em',
        },
        '100px',
        '200px',
      )
    }).toThrow('fromSize and toSize must be provided as stringified numbers with the same units.')
  })
})
