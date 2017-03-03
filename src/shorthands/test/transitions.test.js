import transitions from '../transitions'

describe('transitions', () => {
  it('should generate a single transition from a parameter', () => {
    expect({
      ...transitions('opacity 1.0s ease-in 0s'),
    }).toMatchSnapshot()
  })

  it('should generate a multiple transitions from multiple parameters', () => {
    expect({
      ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s'),
    }).toMatchSnapshot()
  })
})
