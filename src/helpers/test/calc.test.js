// @flow
import calc from '../calc'

const performCalculations = (unit: string) =>
  describe(unit, () => {
    it(`should add ${unit} values`, () => {
      const base = `12${unit}`
      const expected = `14${unit}`
      expect(calc(base, baseAsNumber => baseAsNumber + 2)).toBe(expected)
    })
    it(`should subtract ${unit} values`, () => {
      const base = `12${unit}`
      const expected = `10${unit}`
      expect(calc(base, baseAsNumber => baseAsNumber - 2)).toBe(expected)
    })
    it(`should multiply ${unit} values`, () => {
      const base = `12${unit}`
      const expected = `24${unit}`
      expect(calc(base, baseAsNumber => baseAsNumber * 2)).toBe(expected)
    })
    it(`should divide ${unit} values`, () => {
      const base = `12${unit}`
      const expected = `6${unit}`
      expect(calc(base, baseAsNumber => baseAsNumber / 2)).toBe(expected)
    })
  })

const units = ['px', '%', 'em', 'rem', 'ch', 'vw', 'vh', 'vmin', 'vmax']
describe('calc', () => {
  units.map(performCalculations)

  describe('without unit', () => {
    it('should add values', () => {
      const base = 12
      const expected = 14
      expect(calc(base, baseAsNumber => baseAsNumber + 2)).toBe(expected)
    })
    it('should subtract values', () => {
      const base = 12
      const expected = 10
      expect(calc(base, baseAsNumber => baseAsNumber - 2)).toBe(expected)
    })
    it('should multiply values', () => {
      const base = 12
      const expected = 24
      expect(calc(base, baseAsNumber => baseAsNumber * 2)).toBe(expected)
    })
    it('should divide values', () => {
      const base = 12
      const expected = 6
      expect(calc(base, baseAsNumber => baseAsNumber / 2)).toBe(expected)
    })
  })
})
