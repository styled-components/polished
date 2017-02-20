// @flow
import transparentize from '../transparentize'

describe('transparentize', () => {
  it('it should correctly convert hex #fff with 0.1 amount transparency', () => {
    expect(transparentize(0.1, '#fff')).toMatchSnapshot()
  })

  it('it should correctly convert rgb(255, 0, 255) with 0.1 amount transparency', () => {
    expect(transparentize(0.1, 'rgb(255, 0, 255)')).toMatchSnapshot()
  })

  it('it should correctly convert rgba(255, 0, 0, 1) with 0.1 amount transparency', () => {
    expect(transparentize(0.1, 'rgba(255, 0, 0, 1)')).toMatchSnapshot()
  })

  it('it should correctly convert rgba(255, 0, 0, .5) with 0.3 amount transparency', () => {
    expect(transparentize(0.3, 'rgba(255, 0, 0, .5)')).toMatchSnapshot()
  })

  it('it should correctly convert rgba(255, 0, 0, .5) with 0.5 amount transparency', () => {
    expect(transparentize(0.5, 'rgba(255, 0, 0, .5)')).toMatchSnapshot()
  })

  it('it should correctly convert hsl(0, 0%, 100%) with 0.2 amount transparency', () => {
    expect(transparentize(0.2, 'hsl(0, 0%, 100%)')).toMatchSnapshot()
  })

  it('it should correctly convert hsla(0, 0%, 100%, .8) with 0.5 amount transparency', () => {
    expect(transparentize(0.5, 'hsla(0, 0%, 100%, .8)')).toMatchSnapshot()
  })

  it('it should throw an error when enter an invalid color', () => {
    expect(() => { transparentize(0.5, 'not a color') }).toThrow(new Error('Invalid color'))
  })

  it('it should throw an error when enter an invalid percentage', () => {
    expect(() => { transparentize(1.5, 'rgba(255, 255, 255, .5)') })
      .toThrow(new Error('Invalid amount, only values from 0 to 1 are accepted'))
  })
})
