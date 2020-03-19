// @flow
import cssVar from '../cssVar'

describe('cssVar', () => {
  it('properly gets a css variable', () => {
    // eslint-disable-next-line no-undef
    document.documentElement.style.setProperty('--testing-variable', '#000')
    expect(cssVar('--testing-variable')).toEqual('#000')
  })
})
