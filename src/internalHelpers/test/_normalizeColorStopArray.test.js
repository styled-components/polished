import normalizeColorStopArray from '../_normalizeColorStopArray'

describe('normalizeColorStopArray', () => {
  it('should accept an arry with no positions', () => {
    expect(normalizeColorStopArray(['red', 'blue', 'orange', 'black'])).toEqual(
      {
        timings: ['linear', 'linear', 'linear'],
        stops: [
          { color: 'red', position: 0 },
          { color: 'blue', position: 1 / 3 },
          { color: 'orange', position: 2 / 3 },
          { color: 'black', position: 1 },
        ],
      },
    )
  })

  it('should accept timing functions between each stop', () => {
    expect(
      normalizeColorStopArray([
        'red',
        'ease',
        'blue',
        'cubic-bezier(0.61, 1, 0.88, 1)',
        'orange',
      ]),
    ).toEqual({
      timings: ['ease', 'cubic-bezier(0.61, 1, 0.88, 1)'],
      stops: [
        { color: 'red', position: 0 },
        { color: 'blue', position: 0.5 },
        { color: 'orange', position: 1 },
      ],
    })
  })

  it('should accept an array of color stops with and without positions', () => {
    expect(
      normalizeColorStopArray([
        'red',
        'blue 90%',
        'orange',
        'yellow',
        'blue',
        'black 95%',
      ]),
    ).toEqual({
      timings: ['linear', 'linear', 'linear', 'linear', 'linear'],
      stops: [
        { color: 'red', position: 0 },
        { color: 'blue', position: 0.9 + (0 / 4) * 0.05 },
        { color: 'orange', position: 0.9 + (1 / 4) * 0.05 },
        { color: 'yellow', position: 0.9 + (2 / 4) * 0.05 },
        { color: 'blue', position: 0.9 + (3 / 4) * 0.05 },
        { color: 'black', position: 0.95 },
      ],
    })
  })

  it('should accept position with percentages at the first and/or last stop', () => {
    expect(normalizeColorStopArray(['red 30%', 'blue'])).toEqual({
      timings: ['linear'],
      stops: [
        { color: 'red', position: 0.3 },
        { color: 'blue', position: 1 },
      ],
    })
    expect(normalizeColorStopArray(['red', 'blue 50%'])).toEqual({
      timings: ['linear'],
      stops: [
        { color: 'red', position: 0 },
        { color: 'blue', position: 0.5 },
      ],
    })
    expect(normalizeColorStopArray(['red 20%', 'blue 50%'])).toEqual({
      timings: ['linear'],
      stops: [
        { color: 'red', position: 0.2 },
        { color: 'blue', position: 0.5 },
      ],
    })
  })

  it('should accept the case with just one color', () => {
    expect(normalizeColorStopArray(['red 50%'])).toEqual({
      timings: [],
      stops: [{ color: 'red', position: 0.5 }],
    })
  })

  it('should throw if the input array length is less than two', () => {
    // TODO add assertion that the throw matches a certain message
    expect(() => normalizeColorStopArray([])).toThrow()
  })

  // note: css actually does support this case but it may add too much code for
  // us to support it.
  it('should throw if the color stop includes more than one position', () => {
    // TODO add assertion that the throw matches a certain message
    expect(() => normalizeColorStopArray([
      'red 0%',
      'orange 10% 30%',
      'yellow 50% 70%',
      'green 90% 100%',
    ])).toThrow()
  })

  it("should throw if the color stops and timing functions don't alternate", () => {
    // TODO add assertion that the throw matches a certain message
    expect(() => normalizeColorStopArray(['red', 'ease', 'linear', 'blue'])).toThrow()
    expect(() => normalizeColorStopArray(['ease', 'red', 'blue'])).toThrow()
    expect(() => normalizeColorStopArray(['red', 'blue', 'ease'])).toThrow()
    expect(() => normalizeColorStopArray(['ease', 'ease-out'])).toThrow()
  })
})
