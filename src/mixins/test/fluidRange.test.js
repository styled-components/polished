// @flow
import fluidRange from '../fluidRange'

describe('fluidRange', () => {
  it('should return a valid object when passed a single cssValues object and min/max screen sizes', () => {
    expect(fluidRange(
      {
        prop: 'padding',
        fromSize: '20px',
        toSize: '100px',
      },
      '400px',
      '1000px',
    )).toMatchSnapshot()
  })

  it('should return a valid object when passed multiple cssValues in an array and min/max screen sizes', () => {
    expect(fluidRange(
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
    )).toMatchSnapshot()
  })

  it('should use defaults when min/maxScreen are not passed', () => {
    expect(fluidRange({
      prop: 'padding',
      fromSize: '20px',
      toSize: '100px',
    })).toMatchSnapshot()
  })

  // Errors
  it('should throw an error when not passed an Array or Object as the first argument', () => {
    expect(() => {
      fluidRange('padding', '400px', '1000px')
    }).toThrow('expects either an array of objects or a single object with the properties prop, fromSize, and toSize.')
  })

  it('should throw an error when not passed a first argument', () => {
    expect(() => {
      // $FlowFixMe
      fluidRange(null, '400px', '1000px')
    }).toThrow('expects either an array of objects or a single object with the properties prop, fromSize, and toSize.')
  })

  it('should throw an error when the first argument is an object and does not include all required keys.', () => {
    expect(() => {
      fluidRange({}, '400px', '1000px')
    }).toThrow('expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.')
  })

  it('should throw an error when the first argument is an array of objects that do not include all required keys.', () => {
    expect(() => {
      fluidRange(
        [
          {
            toSize: '100px',
          },
          {
            fromSize: '5px',
          },
        ],
        '400px',
        '1000px',
      )
    }).toThrow('expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.')
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
        400,
        1000,
      )
    }).toThrow('minScreen and maxScreen must be provided as stringified numbers with the same units.')
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
    }).toThrow('minScreen and maxScreen must be provided as stringified numbers with the same units.')
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
    }).toThrow('minScreen and maxScreen must be provided as stringified numbers with the same units.')
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
    }).toThrow('fromSize and toSize must both have the same unit of measure.')
  })
})
