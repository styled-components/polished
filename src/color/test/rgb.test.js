// @flow
import rgb from '../rgb'

describe('rgb', () => {
  it('should convert multiple numbers to a hex color', () => {
    expect({ background: rgb(255, 205, 100) }).toMatchSnapshot()
  })

  it('should convert a rgb object to a hex color', () => {
    expect({ background: rgb({ red: 255, green: 205, blue: 100 }) }).toMatchSnapshot()
  })

  it('should convert to a reduce hex value if possible', () => {
    expect({ background: rgb({ red: 255, green: 255, blue: 255 }) }).toMatchSnapshot()
  })

  it('should throw an error if an object and multiple arguments are passed', () => {
    expect(() => ({ background: rgb({ red: 255, green: 1, blue: 1 }, 250, 100) }))
      .toThrow('Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).')
  })
})
