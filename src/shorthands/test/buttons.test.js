// @flow
import buttons from '../buttons'

describe('buttons', () => {
  it('populates base button selectors', () => {
    expect({ [buttons()]: { 'border-color': 'black' } }).toMatchSnapshot()
  })
  it('populates buttons selectors for a single state', () => {
    expect({ [buttons('active')]: { 'border-color': 'black' } }).toMatchSnapshot()
  })
  it('populates both base selectors and selectors for a single state', () => {
    expect({ [buttons(null, 'focus')]: { 'border-color': 'black' } }).toMatchSnapshot()
  })
  it('populates button selectors for multiple states', () => {
    expect({ [buttons('active', 'focus')]: { 'border-color': 'black' } }).toMatchSnapshot()
  })
  it('throws an error when passed a state it does not recognize', () => {
    expect(
      () => ({ [buttons('clicked')]: { 'border-color': 'black' } }),
    ).toThrow('You passed an unsupported selector state to this method')
  })
})
