// @flow
import mix from '../mix'

describe('mix', () => {
  it('should mix two colors with by a weight of 25%', () => {
    expect(mix(0.25, '#f00', '#00f')).toMatchSnapshot()
  })

  it('should mix a color with an 8-digit hex color', () => {
    expect(mix(0.5, '#FF00007F', '#00f')).toMatchSnapshot()
  })

  it('should mix a 8-digit hex color with a 4-digit hex color', () => {
    expect(mix(0.5, '#FF00007F', '#0f08')).toMatchSnapshot()
  })

  it('should mix a color with a color with an opacity lower than 1', () => {
    expect(mix(0.51, 'rgba(242, 236, 228, 0.5)', '#6b717f')).toMatchSnapshot()
  })

  it('should mix two rgba colors', () => {
    expect(
      mix(0.7, 'rgba(0, 0, 0, 1)', 'rgba(255, 255, 255, 0)'),
    ).toMatchSnapshot()
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

  it('should return the second color when weight is 0', () => {
    expect(
      mix(0, 'rgba(0, 0, 0, 1)', 'rgba(255, 255, 255, 0)'),
    ).toMatchSnapshot()
  })
})
