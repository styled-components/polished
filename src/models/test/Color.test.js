
import Color from '../Color'

describe('Color', function() {

  describe('hsla', function() {

    it('should return an array of the color hsla components', function() {
      const color = new Color({ space: 'hsl', values: [50, 1, 1], alpha: 0.5 })
      expect(color.hsla().length).toBe(4)
    })

    it('should have NaN hue for hue-less colors', function() {
      const color = new Color({ space: 'hsl', values: [0, 1, 1] })
      expect(color.hsla()[0]).toEqual(NaN)
    })

  })

})
