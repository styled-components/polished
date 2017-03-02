// @flow
import darken from '../darken'

describe('darken', () => {
  it('should darken a color by 20%', () => {
    expect(darken(0.2, '#444')).toMatchSnapshot()
  })

  it('should darken a color with opacity by 10%', () => {
    expect(darken(0.1, 'rgba(220,140,140,0.7)')).toMatchSnapshot()
  })

  it('should darken a color with a value of 255 and opacity by 10%', () => {
    expect(darken(0.1, 'rgba(255,140,140,0.7)')).toMatchSnapshot()
  })

  it('should darken a color but not go below 0', () => {
    expect(darken(0.8, 'rgba(40,20,10,0.7)')).toMatchSnapshot()
  })
})
