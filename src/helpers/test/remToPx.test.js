// @flow
import remToPx from '../remToPx'

describe('remToPx', () => {
  beforeEach(() => {
    // $FlowFixMe
    document.documentElement.style.setProperty('font-size', '62.5%') // eslint-disable-line no-undef
  })
  test('calculate px value when a base in % is set on the root.', () => {
    expect(remToPx('1.6rem')).toEqual('16px')
  })
  afterEach(() => {
    // $FlowFixMe
    document.documentElement.style.removeProperty('font-size') // eslint-disable-line no-undef
  })
})

describe('remToPx', () => {
  beforeEach(() => {
    // $FlowFixMe
    document.documentElement.style.setProperty('font-size', '10px') // eslint-disable-line no-undef
  })
  test('calculate px value when a base in px is set on the root.', () => {
    expect(remToPx('1.6rem')).toEqual('16px')
  })
  afterEach(() => {
    // $FlowFixMe
    document.documentElement.style.removeProperty('font-size') // eslint-disable-line no-undef
  })
})

describe('remToPx', () => {
  test('calculate px value when no base is set on the root or provided.', () => {
    expect(remToPx('1.6rem')).toEqual('25.6px')
  })
})

describe('remToPx', () => {
  beforeEach(() => {
    // $FlowFixMe
    document.documentElement.style.setProperty('font-size', '10pt') // eslint-disable-line no-undef
  })
  test('errors when an invalid base is set on the root.', () => {
    expect(() => {
      remToPx('1.6rem')
    }).toThrow('base must be set in "px" or "%" but you set it in "pt".')
  })
  afterEach(() => {
    // $FlowFixMe
    document.documentElement.style.removeProperty('font-size') // eslint-disable-line no-undef
  })
})

describe('remToPx', () => {
  beforeEach(() => {
    // $FlowFixMe
    document.documentElement.style.setProperty('font-size', '10px') // eslint-disable-line no-undef
  })
  test('errors when an invalid value is provided.', () => {
    expect(() => {
      remToPx('1.6em')
    }).toThrow('remToPx expects a value in "rem" but you provided it in "em".')
  })
  afterEach(() => {
    // $FlowFixMe
    document.documentElement.style.removeProperty('font-size') // eslint-disable-line no-undef
  })
})

describe('remToPx', () => {
  test('calculate px value when a base in px is provided.', () => {
    expect(remToPx('1.6rem', '10px')).toEqual('16px')
  })
  test('calculate px value when a base in % is provided.', () => {
    expect(remToPx('1.6rem', '62.5%')).toEqual('16px')
  })
  test('calculate px value when a unitless base is provided.', () => {
    expect(remToPx('1.6', '62.5%')).toEqual('16px')
  })
  test('errors an invalid base is provided.', () => {
    expect(() => {
      remToPx('1.6rem', '10pt')
    }).toThrow('base must be set in "px" or "%" but you set it in "pt".')
  })
  test('errors when an invalid value is provided.', () => {
    expect(() => {
      remToPx('1.6em', '10px')
    }).toThrow('remToPx expects a value in "rem" but you provided it in "em".')
  })
})
