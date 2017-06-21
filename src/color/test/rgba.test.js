// @flow
import rgba from '../rgba'

describe('rgb', () => {
  it('should convert a hex value and an alpha value to a rgba string', () => {
    expect(rgba('#ffffff', 0.4)).toMatchSnapshot()
  })

  it('should convert a named CSS color and an alpha value to a rgba string', () => {
    expect(rgba('black', 0.7)).toMatchSnapshot()
  })

  it('should convert multiple numbers to a rgba string', () => {
    expect({ background: rgba(255, 205, 100, 0.75) }).toMatchSnapshot()
  })

  it('should convert multiple numbers with full opacity to a hex color', () => {
    expect({ background: rgba(255, 205, 100, 1) }).toMatchSnapshot()
  })

  it('should convert a rgba object to a rgba string', () => {
    expect({ background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.75 }) }).toMatchSnapshot()
  })

  it('should convert a rgba object with full opacity to a hex color', () => {
    expect({ background: rgba({ red: 255, green: 205, blue: 100, alpha: 1 }) }).toMatchSnapshot()
  })

  it('should convert a rgba object with full opacity to a reduced hex color', () => {
    expect({ background: rgba({ red: 255, green: 255, blue: 255, alpha: 1 }) }).toMatchSnapshot()
  })

  it('should throw an error if an object and multiple arguments are passed', () => {
    expect(() => ({ background: rgba({ red: 255, green: 1, blue: 1, alpha: 180 }, 250, 100, 0.5) }))
      .toThrow('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).')
  })
})
