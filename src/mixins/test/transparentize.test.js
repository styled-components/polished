// @flow
import transparentize from '../transparentize'

describe('transparentize', () => {
  it('it should correctly convert hex #fff with 20% transparency to rgba', () => {
    expect(transparentize('#fff', 20)).toMatchSnapshot()
  })

  it('it should correctly convert rgb(255, 0, 255) with 10% transparency to rgba', () => {
    expect(transparentize('rgb(255, 0, 255)', 10)).toMatchSnapshot()
  })

  it('it should correctly decrease current alpha of rgba(255, 0, 0, 1) with 10% transparency to rgba', () => {
    expect(transparentize('rgba(255, 0, 0, 1)', 10)).toMatchSnapshot()
  })

  it('it should correctly decrease current alpha of rgba(255, 0, 0, .5) by 50%', () => {
    expect(transparentize('rgba(255, 0, 0, .5)', 50)).toMatchSnapshot()
  })

  it('it should correctly decrease current alpha of rgba(255, 0, 0, .5) by 50%', () => {
    expect(transparentize('rgba(255, 0, 0, .5)', 50)).toMatchSnapshot()
  })

  it('it should correctly convert hsl(0, 0%, 100%) with 20% transparency to rgba', () => {
    expect(transparentize('hsl(0, 0%, 100%)', 20)).toMatchSnapshot()
  })

  it('it should correctly convert hsla(0, 0%, 100%, .8) with 50% transparency to rgba', () => {
    expect(transparentize('hsla(0, 0%, 100%, .8)', 50)).toMatchSnapshot()
  })

  it('it should throw an error when enter an invalid color', () => {
    expect(() => { transparentize('not a color', 50) }).toThrow(new Error('Invalid color'))
  })
})
