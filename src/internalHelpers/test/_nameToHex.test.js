// @flow

import nameToHex from '../_nameToHex'

describe('nameToHex', () => {
  it('should convert a named color to a hex value', () => {
    expect({ background: nameToHex('white') }).toEqual({
      background: '#fff',
    })
  })
  it('should convert a camel-cased named color to a hex value', () => {
    expect({ background: nameToHex('PowderBlue') }).toEqual({
      background: '#b0e0e6',
    })
  })
  it('should return a passed hex value without mutation', () => {
    expect({ background: nameToHex('#fff') }).toEqual({
      background: '#fff',
    })
  })
  it('should return a passed RGB string value without mutation', () => {
    expect({ background: nameToHex('rgb(0,0,0)') }).toEqual({
      background: 'rgb(0,0,0)',
    })
  })
  it('should return a passed HSL value without mutation', () => {
    expect({ background: nameToHex('hsl(180, 50%, 50%)') }).toEqual({
      background: 'hsl(180, 50%, 50%)',
    })
  })
  it('should return a non-string value without mutation', () => {
    // $FlowFixMe
    expect({ background: nameToHex(2) }).toEqual({
      background: 2,
    })
  })
})
