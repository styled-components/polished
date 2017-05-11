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
      [{
        prop: 'padding',
        fromSize: '20px',
        toSize: '100px',
      },
      {
        prop: 'margin',
        fromSize: '5px',
        toSize: '25px',
      }],
      '400px',
      '1000px',
    )).toMatchSnapshot()
  })
})
