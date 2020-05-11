// @flow
import cssVar from '../cssVar'

beforeAll(() => {
  // $FlowFixMe
  document.documentElement.style.setProperty('--background', '#FFF') // eslint-disable-line no-undef
  // $FlowFixMe
  document.documentElement.style.setProperty('--foreground-color', '#000') // eslint-disable-line no-undef
  // $FlowFixMe
  document.documentElement.style.setProperty('--our-background-color', 'red') // eslint-disable-line no-undef
  // $FlowFixMe
  document.documentElement.style.setProperty('--our-Background-Color', 'orange') // eslint-disable-line no-undef
  // $FlowFixMe
  document.documentElement.style.setProperty('--our-complex-value', '12px 12px') // eslint-disable-line no-undef
})

describe('cssVar', () => {
  test('gets a css variable', () => {
    expect(cssVar('--background')).toEqual('#FFF')
  })

  test('gets a hyphenated css variable', () => {
    expect(cssVar('--foreground-color')).toEqual('#000')
  })

  test('gets a complex hyphenated css variable', () => {
    expect(cssVar('--our-background-color')).toEqual('red')
  })

  test('respects casing', () => {
    expect(cssVar('--our-Background-Color')).toEqual('orange')
  })

  test('respects complex values', () => {
    expect(cssVar('--our-complex-value')).toEqual('12px 12px')
  })

  test("returns default when variable isn't found.", () => {
    expect(cssVar('--unfound-variable', 'orange')).toEqual('orange')
  })

  test('errors when variable is not found and no default is provided', () => {
    expect(() => {
      cssVar('--unfound-variable')
    }).toThrow('CSS variable not found and no default was provided.')
  })

  test('errors when variable is not formatted correctly', () => {
    expect(() => {
      cssVar('-bad-formatted-variable')
    }).toThrow('Please provide a valid CSS variable.')
  })
})
