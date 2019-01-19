// @flow
import mix from '../mix'

describe('mix', () => {
  it('should mix two colors with by a weight of 25%', () => {
    expect(mix(0.25, '#f00', '#00f')).toMatchSnapshot()
  })

  it('should mix two colors with an 8-digit hex color', () => {
    expect(mix(0.5, '#FF00007F', '#00f')).toMatchSnapshot()
  })

  it('should mix two colors with a 4-digit hex color', () => {
    expect(mix(0.5, '#FF00007F', '#0f08')).toMatchSnapshot()
  })

  it('should mix two colors with opacity lower than 1', () => {
    expect(mix(0.5, 'rgba(255, 0, 0, 0.5)', '#00f')).toMatchSnapshot()
  })

  it('should mix two colors when weight is a string', () => {
    expect(mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')).toMatchSnapshot()
  })

  it('should return otherColor when passed transparent color', () => {
    expect(mix('0.5', 'transparent', '#00f')).toMatchSnapshot()
  })

  it('should return color when passed transparent otherColor', () => {
    expect(mix('0.5', 'rgba(255, 0, 0, 0.5)', 'transparent')).toMatchSnapshot()
  })

  it('should return transparent when passed transparent for both colors', () => {
    expect(mix('0.5', 'transparent', 'transparent')).toMatchSnapshot()
  })
})
