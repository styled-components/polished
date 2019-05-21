// @flow
import getContrast from '../getContrast'

describe('getContrast', () => {
  it('should return the color contrast of two hex colors', () => {
    expect(getContrast('#444', '#fff')).toMatchSnapshot()
  })

  it('should return the color contrast of two 8-digit hex colors', () => {
    expect(getContrast('#6564CDB3', '#ffffff')).toMatchSnapshot()
  })

  it('should return the color contrast of two 4-digit hex colors', () => {
    expect(getContrast('#0f08', '#000')).toMatchSnapshot()
  })

  it('should return the color contrast of two rgba colors', () => {
    expect(
      getContrast('rgba(101,100,205,0.7)', 'rgba(0,0,0,1)'),
    ).toMatchSnapshot()
  })

  it('should return the color contrast of two rgb colors', () => {
    expect(getContrast('rgb(204,205,100)', 'rgb(0,0,0)')).toMatchSnapshot()
  })

  it('should return the color contrast of two hsla colors', () => {
    expect(
      getContrast('hsla(250, 100%, 50%, 0.2)', 'hsla(0, 100%, 100%, 1)'),
    ).toMatchSnapshot()
  })

  it('should return the color contrast of two hsl colors', () => {
    expect(
      getContrast('hsl(0, 100%, 50%)', 'hsl(0, 100%, 100%)'),
    ).toMatchSnapshot()
  })

  it('should return the color contrast of two named CSS colors', () => {
    expect(getContrast('papayawhip', 'white')).toMatchSnapshot()
  })

  it('should return 1 when used with a transparent color', () => {
    expect(getContrast('transparent', '#000')).toMatchSnapshot()
  })
})
