// @flow
import getColorContrastScores from '../getColorContrastScores'

describe('getColorContrastScores', () => {
  it('should return the color contrast scores of two hex colors', () => {
    expect(getColorContrastScores('#444', '#fff')).toMatchSnapshot()
  })

  it('should return the color contrast scores of two 8-digit hex colors', () => {
    expect(getColorContrastScores('#6564CDB3', '#ffffff')).toMatchSnapshot()
  })

  it('should return the color contrast scores of two 4-digit hex colors', () => {
    expect(getColorContrastScores('#0f08', '#000')).toMatchSnapshot()
  })

  it('should return the color contrast scores of two rgba colors', () => {
    expect(
      getColorContrastScores('rgba(101,100,205,0.7)', 'rgba(0,0,0,1)'),
    ).toMatchSnapshot()
  })

  it('should return the color contrast scores of two rgb colors', () => {
    expect(
      getColorContrastScores('rgb(204,205,100)', 'rgb(0,0,0)'),
    ).toMatchSnapshot()
  })

  it('should return the color contrast scores of two hsla colors', () => {
    expect(
      getColorContrastScores(
        'hsla(250, 100%, 50%, 0.2)',
        'hsla(0, 100%, 100%, 1)',
      ),
    ).toMatchSnapshot()
  })

  it('should return the color contrast scores of two hsl colors', () => {
    expect(
      getColorContrastScores('hsl(0, 100%, 50%)', 'hsl(0, 100%, 100%)'),
    ).toMatchSnapshot()
  })

  it('should return the color contrast scores of two named CSS colors', () => {
    expect(getColorContrastScores('papayawhip', 'black')).toMatchSnapshot()
  })
})
