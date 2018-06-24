// @flow
import mix from '../mix'

describe('mix', () => {
  it('should mix two colors', () => {
    expect(mix('#f00', '#00f')).toMatchSnapshot()
  })

  it('should mix two colors with by a weight of 25%', () => {
    expect(mix(0.25, '#f00', '#00f')).toMatchSnapshot()
  })

  it('should mix two colors with an 8-digit hex color', () => {
    expect(mix(0.5, '#FF00007F', '#00f')).toMatchSnapshot()
  })

  it('should mix two colors with opacity lower than 1', () => {
    expect(mix(0.5, 'rgba(255, 0, 0, 0.5)', '#00f')).toMatchSnapshot()
  })
})
