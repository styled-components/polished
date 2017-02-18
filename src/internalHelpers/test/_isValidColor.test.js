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


})
