// @flow
import hideVisually from '../hideVisually'

describe('hideVisually', () => {
  it('should return the CSS in JS', () => {
    expect({ ...hideVisually() }).toEqual({
      border: '0',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
    })
  })
})
