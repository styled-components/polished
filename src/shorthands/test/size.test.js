// @flow
import size from '../size'

describe('size', () => {
  it('should pass parameters to the values of height and width', () => {
    expect({ ...size('300px', '250px') }).toMatchSnapshot()
  })

  it('should properly add rules when block has existing rules', () => {
    expect({
      background: 'red',
      ...size('300px', '250px'),
    }).toMatchSnapshot()
  })

  it('should set height and width to the same value when only one parameter is passed', () => {
    expect({ ...size('300px') }).toMatchSnapshot()
  })
})
