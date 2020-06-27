import numberToHex from '../_numberToHex'

describe('numberToHex', () => {
  it('should convert 0 to "00"', () => {
    expect(numberToHex(0)).toEqual('00')
  })

  it('should convert 15 to "0f"', () => {
    expect(numberToHex(15)).toEqual('0f')
  })

  it('should convert 16 to "10"', () => {
    expect(numberToHex(16)).toEqual('10')
  })

  it('should convert 17 to "11"', () => {
    expect(numberToHex(17)).toEqual('11')
  })
})
