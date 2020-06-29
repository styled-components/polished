import parseTimingFunction from '../_parseTimingFunction'

describe('parseTimingFunction', () => {
  it('takes in a timing function strings and returns a function', () => {
    const timingFn = parseTimingFunction('linear')

    expect(timingFn(0)).toBe(0)
    expect(timingFn(0.1)).toBe(0.1)
    expect(timingFn(0.2)).toBe(0.2)
    expect(timingFn(0.3)).toBe(0.3)
    expect(timingFn(0.4)).toBe(0.4)
    expect(timingFn(0.5)).toBe(0.5)
    expect(timingFn(0.6)).toBe(0.6)
    expect(timingFn(0.7)).toBe(0.7)
    expect(timingFn(0.8)).toBe(0.8)
    expect(timingFn(0.9)).toBe(0.9)
    expect(timingFn(1)).toBe(1)
  })

  it('takes in the timing function ease', () => {
    const timingFn = parseTimingFunction('ease')

    expect(timingFn(0)).toBe(0.25)
    expect(timingFn(0.1)).toBe(0.21430000000000002)
    expect(timingFn(0.2)).toBe(0.19840000000000008)
    expect(timingFn(0.3)).toBe(0.20409999999999995)
    expect(timingFn(0.4)).toBe(0.23320000000000002)
    expect(timingFn(0.5)).toBe(0.2875)
    expect(timingFn(0.6)).toBe(0.3688)
    expect(timingFn(0.7)).toBe(0.47889999999999994)
    expect(timingFn(0.8)).toBe(0.6196000000000002)
    expect(timingFn(0.9)).toBe(0.7927000000000001)
    expect(timingFn(1)).toBe(1)
  })

  it.todo('ease-in')
  it.todo('ease-out')
  it.todo('ease-in-out')
  it.todo('cubic-bezier')
})
