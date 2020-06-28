import getScale from '../getScale'

describe('getScale', () => {
  it('should throw if no colors were provided', () => {
    // TODO: assert that this message is the correct
    expect(() => getScale([])).toThrow()
  })

  it('returns a function that interpolates between colors using mix', () => {
    const scale = getScale(['#0a0', '#ff0', '#f00'])

    expect(scale(0)).toEqual('#0a0')
    expect(scale(0.1)).toEqual('#3b0')
    expect(scale(0.2)).toEqual('#6c0')
    expect(scale(0.3)).toEqual('#9d0')
    expect(scale(0.4)).toEqual('#ce0')
    expect(scale(0.5)).toEqual('#ff0')
    expect(scale(0.6)).toEqual('#fc0')
    expect(scale(0.7)).toEqual('#f90')
    expect(scale(0.8)).toEqual('#ff6500')
    expect(scale(0.9)).toEqual('#ff3200')
    expect(scale(1)).toEqual('#f00')
  })

  it('accepts color stop percentages', () => {
    const scale = getScale(['#0a0 20%', '#ff0', '#f00 80%'])

    expect(scale(0)).toEqual('#0a0')
    expect(scale(0.1)).toEqual('#0a0')
    expect(scale(0.2)).toEqual('#0a0')
    expect(scale(0.3)).toEqual('#54c600')
    expect(scale(0.4)).toEqual('#aae200')
    expect(scale(0.5)).toEqual('#ff0')
    expect(scale(0.6)).toEqual('#fa0')
    expect(scale(0.7)).toEqual('#f50')
    expect(scale(0.8)).toEqual('#f00')
    expect(scale(0.9)).toEqual('#f00')
    expect(scale(1)).toEqual('#f00')
  })
})
