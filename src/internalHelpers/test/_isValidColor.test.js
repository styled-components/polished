// @flow
import * as validations from '../_isValidColor'

describe('isValidColor', () => {
  // hex
  it('isHex should return true when color is #fff', () => {
    expect(validations.isHex('#fff')).toEqual(true)
  })

  it('isHex should return true when color is #000000', () => {
    expect(validations.isHex('#000000')).toEqual(true)
  })

  it('isHex should return false when color is #00', () => {
    expect(validations.isHex('#00')).toEqual(false)
  })

  // rgb
  it('isRgb should return true when color is rgb(0,0,0)', () => {
    expect(validations.isRgb('rgb(0,0,0)')).toEqual(true)
  })

  it('isRgb should return true when color is rgb(255, 0, 0)', () => {
    expect(validations.isRgb('rgb(255, 0, 0)')).toEqual(true)
  })

  it('isRgb should return false when color is rgba(255, 0, 0, 1)', () => {
    expect(validations.isRgb('rgba(255, 0, 0, 1)')).toEqual(false)
  })

  // rgba
  it('isRgba should return true when color is rgba(0,0,0,0)', () => {
    expect(validations.isRgba('rgba(0,0,0,0)')).toEqual(true)
  })

  it('isRgba should return true when color is rgb(255, 0, 0, .5)', () => {
    expect(validations.isRgba('rgba(255, 0, 0, .5)')).toEqual(true)
  })

  it('isRgba should return false when color is rgb(255, 0, 0)', () => {
    expect(validations.isRgba('rgb(255, 0, 0)')).toEqual(false)
  })

  // hsl
  it('isHsl should return true when color is hsl(0,0%,100%)', () => {
    expect(validations.isHsl('hsl(0,0%,100%)')).toEqual(true)
  })

  it('isHsl should return true when color is hsl(10,10%,100%)', () => {
    expect(validations.isHsl('hsl(10,10%,100%)')).toEqual(true)
  })

  it('isHsl should return false when color is hsla(10,10%,100%)', () => {
    expect(validations.isHsl('hsla(10,10%,100%)')).toEqual(false)
  })

  // hsla
  it('isHsla should return true when color is hsla(0,0%,100%,1)', () => {
    expect(validations.isHsla('hsla(0,0%,100%,1)')).toEqual(true)
  })

  it('isHsla should return true when color is hsla(10,10%,100%,.5)', () => {
    expect(validations.isHsla('hsla(10,10%,100%,.5)')).toEqual(true)
  })

  it('isHsla should return false when color is hsl(10,10%,2%)', () => {
    expect(validations.isHsla('hsl(10,10%,2%)')).toEqual(false)
  })

})
