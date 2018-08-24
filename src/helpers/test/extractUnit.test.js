// @flow
import extractUnit from '../extractUnit'
import units from './__unitTypes__'

// eslint-disable-next-line no-undef
const performCalculations = (unit: $Values<typeof units>) => {
  describe(`with ${unit}`, () => {
    it(`should extract ${unit} from whole values`, () => {
      expect(extractUnit(`123${unit}`)).toBe(unit)
    })
    it(`should extract ${unit} from decimal values`, () => {
      expect(extractUnit(`12.3${unit}`)).toBe(unit)
    })
  })
}

describe('extractUnit', () => {
  Object.keys(units).map(performCalculations)

  describe('without unit', () => {
    it('should return an empty string from whole values', () => {
      expect(extractUnit('123')).toBe('')
    })
    it('should return an empty string from decimal values', () => {
      expect(extractUnit('12.3')).toBe('')
    })
  })

  it('should return an empty string when number is passed', () => {
    expect(extractUnit(123)).toBe('')
  })
})
