// @flow
import darken from '../darken'

describe('rgb', () => {
  it('should darken a color by 20%', () => {
    expect(darken(0.2, '#444')).toMatchSnapshot()
  })

  it('should darken a typical color with opacity by 10%', () => {
    expect(darken(0.1, 'rgba(220,140,140,0.7)')).toMatchSnapshot()
  })

  it('should darken a color with a value of 255 and opacity by 10%', () => {
    expect(darken(0.1, 'rgba(255,140,140,0.7)')).toMatchSnapshot()
  })
})
