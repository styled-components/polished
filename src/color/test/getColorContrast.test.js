// @flow
import getColorContrast from '../getColorContrast'

describe('getColorContrast', () => {
  it('should return the color contrast of two hex colors', () => {
    expect(getColorContrast('#444', '#fff')).toMatchSnapshot()
  })

  it('should return the color contrast of two 8-digit hex colors', () => {
    expect(getColorContrast('#6564CDB3', '#ffffff')).toMatchSnapshot()
  })

  it('should return the color contrast of two 4-digit hex colors', () => {
    expect(getColorContrast('#0f08', '#000')).toMatchSnapshot()
  })

  it('should return the color contrast of two rgba colors', () => {
    expect(
      getColorContrast('rgba(101,100,205,0.7)', 'rgba(0,0,0,1)'),
    ).toMatchSnapshot()
  })

  it('should return the color contrast of two rgb colors', () => {
    expect(getColorContrast('rgb(204,205,100)', 'rgb(0,0,0)')).toMatchSnapshot()
  })

  it('should return the color contrast of two hsla colors', () => {
    expect(
      getColorContrast('hsla(250, 100%, 50%, 0.2)', 'hsla(0, 100%, 100%, 1)'),
    ).toMatchSnapshot()
  })

  it('should return the color contrast of two hsl colors', () => {
    expect(
      getColorContrast('hsl(0, 100%, 50%)', 'hsl(0, 100%, 100%)'),
    ).toMatchSnapshot()
  })

  it('should return the color contrast of two named CSS colors', () => {
    expect(getColorContrast('papayawhip', 'white')).toMatchSnapshot()
  })
})
