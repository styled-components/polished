// @flow
import tint from '../tint'

describe('test', () => {
  it('should tint the provided color with white by the given percentage', () => {
    expect(tint(0.25, '#00f')).toMatchSnapshot()
  })
  it('should tint the provided color when passed a string for amount', () => {
    expect(tint('0.25', '#00f')).toMatchSnapshot()
  })
})
