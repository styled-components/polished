import numberToHex from '../_numberToHex'

describe('numberToHex', () => {
  it('should convert 0 to "00"', () => {
    expect(numberToHex(0)).toMatchSnapshot()
  })

  it('should convert 15 to "0f"', () => {
    expect(numberToHex(15)).toMatchSnapshot()
  })

  it('should convert 16 to "10"', () => {
    expect(numberToHex(16)).toMatchSnapshot()
  })

  it('should convert 17 to "11"', () => {
    expect(numberToHex(17)).toMatchSnapshot()
  })
})
