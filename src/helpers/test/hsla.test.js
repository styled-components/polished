import hsla from '../hsla'

describe('hsla', function() {

  it('should return a Color', function() {
    const Color = require('../../models/Color')
    expect(hsla(0, 0, 0, 0).constructor).toBe(Color)
  })

  it('should return a Color with the given hsla values', function() {
    const [h, s, l, a] = hsla(3.3, 1, 0.5, 0.4).hsla()
    expect(h).toBeCloseTo(3.3, 1)
    expect(s).toEqual(1)
    expect(l).toEqual(0.5)
    expect(a).toEqual(0.4)
  })

})
