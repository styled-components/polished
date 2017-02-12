// @flow
import darken from '../darken'

describe('rgb', () => {
  it('should darken a color by 20%', () => {
    expect(darken(0.2, '#444')).toMatchSnapshot()
  })

  it('should darken a color with opacity by 30%', () => {
    expect(darken(0.1, 'rgba(260,140,140,0.7)')).toMatchSnapshot()
  })
})
