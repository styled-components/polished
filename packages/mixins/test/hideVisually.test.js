// @flow
import hideVisually from '../src/hideVisually'

describe('hideVisually', () => {
  it('should return the CSS in JS', () => {
    expect({ ...hideVisually() }).toMatchSnapshot()
  })
})
