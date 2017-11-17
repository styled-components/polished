// @flow
import calc from '../calc'

describe('calc', () => {
  describe('px', () => {
    it('should add pixel values', () => {
      const base = '12px'
      const expected = '14px'
      expect(calc(base, baseAsNumber => baseAsNumber + 2)).toBe(expected)
    })
    it('should subtract pixel values', () => {
      const base = '12px'
      const expected = '10px'
      expect(calc(base, baseAsNumber => baseAsNumber - 2)).toBe(expected)
    })
    it('should multiply pixel values', () => {
      const base = '12px'
      const expected = '24px'
      expect(calc(base, baseAsNumber => baseAsNumber * 2)).toBe(expected)
    })
    it('should divide pixel values', () => {
      const base = '12px'
      const expected = '6px'
      expect(calc(base, baseAsNumber => baseAsNumber / 2)).toBe(expected)
    })
  })
})
