// @flow
import buttons from '../buttons'

describe('buttons', () => {
  it('populates base button selectors', () => {
    expect({ [buttons()]: { 'border-color': 'black' } }).toEqual({
      [`button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"]`]: {
        'border-color': 'black',
      },
    })
  })
  it('populates buttons selectors for a single state', () => {
    expect({
      [buttons('active')]: { 'border-color': 'black' },
    }).toEqual({
      [`button:active,
  input[type="button"]:active,
  input[type="reset"]:active,
  input[type="submit"]:active`]: {
        'border-color': 'black',
      },
    })
  })
  it('populates both base selectors and selectors for a single state', () => {
    expect({
      [buttons(null, 'focus')]: { 'border-color': 'black' },
    }).toEqual({
      [`button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"],button:focus,
  input[type="button"]:focus,
  input[type="reset"]:focus,
  input[type="submit"]:focus`]: {
        'border-color': 'black',
      },
    })
  })
  it('populates button selectors for multiple states', () => {
    expect({
      [buttons('active', 'focus')]: { 'border-color': 'black' },
    }).toEqual({
      [`button:active,
  input[type="button"]:active,
  input[type="reset"]:active,
  input[type="submit"]:active,button:focus,
  input[type="button"]:focus,
  input[type="reset"]:focus,
  input[type="submit"]:focus`]: {
        'border-color': 'black',
      },
    })
  })
  it('throws an error when passed a state it does not recognize', () => {
    expect(() => ({
      // $FlowFixMe
      [buttons('clicked')]: { 'border-color': 'black' },
    })).toThrow('You passed an unsupported selector state to this method')
  })
})
