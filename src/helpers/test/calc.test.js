// @flow
import calc from '../calc'
import units from './__unitTypes__'

// eslint-disable-next-line no-undef
const performCalculations = (unit: $Values<units>) =>
  describe(unit, () => {
    it(`should add ${unit} values with decimals`, () => {
      const base = `12.4${unit}`
      const expected = `14.1${unit}`
      expect(calc(base, baseAsNumber => baseAsNumber + 1.7)).toBe(expected)
    })
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

describe('calc', () => {
  units.map(performCalculations)

  describe('without unit', () => {
    it('should add values with decimals', () => {
      const base = 12.4
      const expected = 14.1
      expect(calc(base, baseAsNumber => baseAsNumber + 1.7)).toBe(expected)
    })
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

  it('returns an empty string if an empty string is passed', () => {
    expect(calc('', baseAsNumber => baseAsNumber / 2)).toBe('')
  })

  it('returns the input when no calculation was passed', () => {
    expect(calc('123px')).toBe('123px')
  })
})
