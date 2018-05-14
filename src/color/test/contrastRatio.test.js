// @flow
import contrastRatio from '../contrastRatio'

describe('contrastRatio', () => {
  it('should return the contrast ratio given white (#fff) and black (#000)', () => {
    expect(contrastRatio('#fff', '#000')).toMatchSnapshot()
  })

  it('should return the contrast ratio given black (#000) and white (#fff)', () => {
    expect(contrastRatio('#000', '#fff')).toMatchSnapshot()
  })

  it('should return the contrast ratio given white (#fff) and white (#fff)', () => {
    expect(contrastRatio('#fff', '#fff')).toMatchSnapshot()
  })

  it('should return the contrast ratio given black (#000) and black (#000)', () => {
    expect(contrastRatio('#000', '#000')).toMatchSnapshot()
  })

  it('should return the contrast ratio between two hex colors', () => {
    expect(contrastRatio('#123', '#456')).toMatchSnapshot()
  })

  it('should return the contrast ratio between twon rgba colors', () => {
    expect(contrastRatio('rgba(204,205,100,0.7)', 'rgba(100,0,255,0.3)')).toMatchSnapshot()
  })

  it('should return the contrast ratio between twon rgb colors', () => {
    expect(contrastRatio('rgb(204,0,200)', 'rgb(0,205,0)')).toMatchSnapshot()
  })

  it('should return the contrast ratio between twon hlsa colors', () => {
    expect(contrastRatio('hsla(250, 100%, 50%, 0.2)', 'hsla(20, 50%, 100%, 0.5)')).toMatchSnapshot()
  })

  it('should return the contrast ratio between twon hls colors', () => {
    expect(contrastRatio('hsl(0, 100%, 50%)', 'hsl(100, 20%, 80%)')).toMatchSnapshot()
  })

  it('should return the contrast ratio between two named CSS colors', () => {
    expect(contrastRatio('papayawhip', 'blue')).toMatchSnapshot()
  })
})
