// @flow
import wordWrap from '../wordWrap'

describe('wordWrap', () => {
  it('should accept other values', () => {
    expect({
      ...wordWrap('break-all'),
    }).toEqual({
      overflowWrap: 'break-all',
      wordBreak: 'break-all',
      wordWrap: 'break-all',
    })
  })

  it('should default wrap to break-word', () => {
    expect({
      ...wordWrap(),
    }).toEqual({
      overflowWrap: 'break-word',
      wordBreak: 'break-all',
      wordWrap: 'break-word',
    })
  })
})
