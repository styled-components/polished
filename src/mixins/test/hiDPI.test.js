// @flow
import hiDPI from '../hiDPI'

describe('hiDPI', () => {
  it('should pass ratio to media query', () => {
    expect({
      [hiDPI(1.5)]: {
        'width': '200px',
      },
    }).toMatchSnapshot()
  })

  it('should set a default ratio of 1.3 when no ratio is passed', () => {
    expect({
      [hiDPI()]: {
        'width': '200px',
      },
    }).toMatchSnapshot()
  })
})
