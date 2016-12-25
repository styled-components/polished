// @flow
import rgba from '../rgba'

describe('rgb', () => {
  it('should convert multiple numbers to a rgba string', () => {
    expect({ background: rgba(255, 205, 100, 180) }).toMatchSnapshot()
  })

  it('should convert multiple numbers with full opacity to a hex color', () => {
    expect({ background: rgba(255, 205, 100, 255) }).toMatchSnapshot()
  })

  it('should convert a rgba object to a rgba string', () => {
    expect({ background: rgba({ red: 255, green: 205, blue: 100, alpha: 180 }) }).toMatchSnapshot()
  })

  it('should convert a rgba object with full opacity to a hex color', () => {
    expect({ background: rgba({ red: 255, green: 205, blue: 100, alpha: 255 }) }).toMatchSnapshot()
  })

  it('should convert a rgba object with full opacity to a reduced hex color', () => {
    expect({ background: rgba({ red: 255, green: 255, blue: 255, alpha: 255 }) }).toMatchSnapshot()
  })

  it('should throw an error if an object and multiple arguments are passed', () => {
    expect(() => ({ background: rgba({ red: 255, green: 1, blue: 1, alpha: 180 }, 250, 100) }))
      .toThrow('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 180) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 180 }).')
  })
})
