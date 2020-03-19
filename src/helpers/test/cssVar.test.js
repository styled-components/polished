// @flow
import cssVar from '../cssVar'

beforeAll(() => {
  // eslint-disable-next-line no-undef
  document.documentElement.style.setProperty('--background', '#FFF')
  // eslint-disable-next-line no-undef
  document.documentElement.style.setProperty('--foreground-color', '#000')
  // eslint-disable-next-line no-undef
  document.documentElement.style.setProperty('--our-background-color', 'red')
  // eslint-disable-next-line no-undef
  document.documentElement.style.setProperty('--our-Background-Color', 'orange')
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
  test('errors when variable is not found', () => {
    expect(() => {
      cssVar('--unfound-variable')
    }).toThrow('CSS variable not found.')
  })
  test('errors when variable is not formatted correctly', () => {
    expect(() => {
      cssVar('-bad-formatted-variable')
    }).toThrow('Please provide a valid CSS variable.')
  })
})
