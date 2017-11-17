// @flow
import extractUnit from '../extractUnit'
import units from './__unitTypes__'

// eslint-disable-next-line no-undef
const performCalculations = (unit: $Values<units>) => {
  describe(`with ${unit}`, () => {
    it(`should extract ${unit} from whole values`, () => {
      expect(extractUnit(`1${unit}`)).toBe(unit)
    })
    it(`should extract ${unit} from decimal values`, () => {
      expect(extractUnit(`1.1${unit}`)).toBe(unit)
    })
  })
}

describe('extractUnit', () => {
  units.map(performCalculations)
})
