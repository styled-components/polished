// @flow
import hideVisually from '../hideVisually'

describe('hideVisually', () => {
  it('should return the CSS in JS', () => {
    expect({ ...hideVisually() }).toMatchSnapshot()
  })
})
