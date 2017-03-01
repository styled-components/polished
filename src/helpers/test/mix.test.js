// @flow
import mix from '../mix'

describe('mix', () => {
  it('should mix two colors', () => {
    expect(mix('#f00', '#00f')).toMatchSnapshot()
  })

  it('should mix two colors with by a weight of 25%', () => {
    expect(mix(0.25, '#f00', '#00f')).toMatchSnapshot()
  })

  it('should mix two colors with opacity lower than 1', () => {
    expect(mix('rgba(255, 0, 0, 0.5)', '#00f')).toMatchSnapshot()
  })

  it('should throw an error if only one color is provided', () => {
    expect(() => { mix(0.25, 'rgba(255, 0, 0, 0.5)') }).toThrow(new Error('Passed invalid arguments to mix, please pass either two colors or the weight as a number and the two colors.'))
  })
})
