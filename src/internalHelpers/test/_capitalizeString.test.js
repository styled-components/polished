// @flow
import capitalizeString from '../_capitalizeString'

describe('capitalizeString', () => {
  it('capitalizes a string', () => {
    expect(capitalizeString('polished')).toEqual('Polished')
  })
  it('returns a capitalized string untouched', () => {
    expect(capitalizeString('Polished')).toEqual('Polished')
  })
})
