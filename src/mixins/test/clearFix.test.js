// @flow
import clearFix from '../clearFix'

describe('clearFix', () => {
  it('should pass parent to pseudo selector', () => {
    expect(clearFix('div')).toEqual({
      'div::after': {
        clear: 'both',
        content: '""',
        display: 'table',
      },
    })
  })

  it('should default to & when no parent is passed', () => {
    expect(clearFix()).toEqual({
      '&::after': {
        clear: 'both',
        content: '""',
        display: 'table',
      },
    })
  })
})
