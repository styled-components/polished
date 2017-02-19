// @flow
import transparentize from '../transparentize'

describe('transparentize', () => {
  it('it should correctly convert hex #fff with 20% transparency to rgba', () => {
    expect(transparentize(0.2, '#fff')).toMatchSnapshot()
  })

  it('it should correctly convert rgb(255, 0, 255) with 10% transparency to rgba', () => {
    expect(transparentize(0.1, 'rgb(255, 0, 255)')).toMatchSnapshot()
  })

  it('it should correctly decrease current alpha of rgba(255, 0, 0, 1) with 10% transparency to rgba', () => {
    expect(transparentize(0.1, 'rgba(255, 0, 0, 1)')).toMatchSnapshot()
  })

  it('it should correctly decrease current alpha of rgba(255, 0, 0, .5) by 50%', () => {
    expect(transparentize(0.5, 'rgba(255, 0, 0, .5)')).toMatchSnapshot()
  })

  it('it should correctly decrease current alpha of rgba(255, 0, 0, .5) by 50%', () => {
    expect(transparentize(0.5, 'rgba(255, 0, 0, .5)')).toMatchSnapshot()
  })

  it('it should correctly convert hsl(0, 0%, 100%) with 20% transparency to rgba', () => {
    expect(transparentize(0.2, 'hsl(0, 0%, 100%)')).toMatchSnapshot()
  })

  it('it should correctly convert hsla(0, 0%, 100%, .8) with 50% transparency to rgba', () => {
    expect(transparentize(0.5, 'hsla(0, 0%, 100%, .8)')).toMatchSnapshot()
  })

  it('it should throw an error when enter an invalid color', () => {
    expect(() => { transparentize(0.5, 'not a color') }).toThrow(new Error('Invalid color'))
  })

  it('it should throw an error when enter an invalid percentage', () => {
    expect(() => { transparentize(1.5, 'rgba(255, 255, 255, .5)') })
      .toThrow(new Error('Invalid percentage, only values from 0 to 1 are accepted'))
  })
})
