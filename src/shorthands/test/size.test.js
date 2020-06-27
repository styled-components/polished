// @flow
import size from '../size'

describe('size', () => {
  it('should pass parameters to the values of height and width', () => {
    expect({ ...size('300px', '250px') }).toEqual({
      height: '300px',
      width: '250px',
    })
  })

  it('should set height and width to the same value when only one parameter is passed', () => {
    expect({ ...size('300px') }).toEqual({
      height: '300px',
      width: '300px',
    })
  })

  it('should pass parameters to the values of height and width when passed integers', () => {
    expect({ ...size(300, 250) }).toEqual({
      height: 300,
      width: 250,
    })
  })

  it('should pass parameters to the values of height and width when passed zero', () => {
    expect({ ...size(0) }).toEqual({
      height: 0,
      width: 0,
    })
  })
})
