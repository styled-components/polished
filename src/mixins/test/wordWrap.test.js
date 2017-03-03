// @flow
import wordWrap from '../wordWrap'

describe('wordWrap', () => {
  it('should accept other values', () => {
    expect({
      ...wordWrap('break-all'),
    }).toMatchSnapshot()
  })

  it('should default wrap to break-word', () => {
    expect({
      ...wordWrap(),
    }).toMatchSnapshot()
  })
})
