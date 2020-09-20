// @flow
import math from '../../math/math'
import exponential from '../../math/presets/exponentialSymbols'

const OLD_ENV = process.env

beforeEach(() => {
  jest.resetModules()
  process.env = { ...OLD_ENV }
  delete process.env.NODE_ENV
})

afterEach(() => {
  process.env = OLD_ENV
})

describe('errors', () => {
  it('should throw an error when a function has no opening parenthesis', () => {
    process.env.NODE_ENV = 'production'
    expect(() => {
      math('1px + sqrt 4', exponential)
    }).toThrow(
      'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#38 for more information.',
    )
  })
})
