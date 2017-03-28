// @flow
import shade from '../shade'

describe('shade', () => {
  it('should shade the provided color with white by the given percentage', () => {
    expect(shade(0.25, '#00f')).toMatchSnapshot()
  })

  it('should throw an error if a percentage greater than 1 is passed', () => {
    const error = new Error('Passed an incorrect argument to shade, please pass a percentage less than or equal to 1 and larger than or equal to -1.')
    expect(() => { shade(1.1, '#00f') }).toThrow(error)
  })

  it('should throw an error if the arguments are passed in the wrong order', () => {
    const error = new Error('Passed an incorrect argument to shade, please pass a percentage less than or equal to 1 and larger than or equal to -1.')
    expect(() => { shade('#00f', 0.2) }).toThrow(error)
  })

  it('should throw an error if a valid string is not passed as a color', () => {
    const error = new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.')
    expect(() => { shade(1, 2.0) }).toThrow(error)
  })
})
