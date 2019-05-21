// @flow
import meetsContrastGuidelines from '../meetsContrastGuidelines'

describe('meetsContrastGuidelines', () => {
  it('should return the color contrast guidelines of two hex colors', () => {
    expect(meetsContrastGuidelines('#444', '#fff')).toMatchSnapshot()
  })

  it('should return the color contrast guidelines of two 8-digit hex colors', () => {
    expect(meetsContrastGuidelines('#6564CDB3', '#ffffff')).toMatchSnapshot()
  })

  it('should return the color contrast guidelines of two 4-digit hex colors', () => {
    expect(meetsContrastGuidelines('#0f08', '#000')).toMatchSnapshot()
  })

  it('should return the color contrast guidelines of two rgba colors', () => {
    expect(
      meetsContrastGuidelines('rgba(101,100,205,0.7)', 'rgba(0,0,0,1)'),
    ).toMatchSnapshot()
  })

  it('should return the color contrast guidelines of two rgb colors', () => {
    expect(
      meetsContrastGuidelines('rgb(204,205,100)', 'rgb(0,0,0)'),
    ).toMatchSnapshot()
  })

  it('should return the color contrast guidelines of two hsla colors', () => {
    expect(
      meetsContrastGuidelines(
        'hsla(250, 100%, 50%, 0.2)',
        'hsla(0, 100%, 100%, 1)',
      ),
    ).toMatchSnapshot()
  })

  it('should return the color contrast guidelines of two hsl colors', () => {
    expect(
      meetsContrastGuidelines('hsl(0, 100%, 50%)', 'hsl(0, 100%, 100%)'),
    ).toMatchSnapshot()
  })

  it('should return the color contrast guidelines of two named CSS colors', () => {
    expect(meetsContrastGuidelines('papayawhip', 'black')).toMatchSnapshot()
  })

  it('should return failing contrast guidelines when used with a transparent color', () => {
    expect(meetsContrastGuidelines('transparent', '#000')).toMatchSnapshot()
  })
})
