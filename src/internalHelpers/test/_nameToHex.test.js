// @flow

import nameToHex from '../_nameToHex'

describe('nameToHex', () => {
  it('should convert a named color to a hex value', () => {
    expect({ background: nameToHex('white') }).toMatchSnapshot()
  })
  it('should convert a camel-cased named color to a hex value', () => {
    expect({ background: nameToHex('PowderBlue') }).toMatchSnapshot()
  })
  it('should return a passed hex value without mutation', () => {
    expect({ background: nameToHex('#fff') }).toMatchSnapshot()
  })
  it('should return a passed RGB string value without mutation', () => {
    expect({ background: nameToHex('rgb(0,0,0)') }).toMatchSnapshot()
  })
  it('should return a passed HSL value without mutation', () => {
    expect({ background: nameToHex('hsl(180, 50%, 50%)') }).toMatchSnapshot()
  })
  it('should return a non-string value without mutation', () => {
    // $FlowIgnoreNextLine since this is invalid code, flow complains
    expect({ background: nameToHex(2) }).toMatchSnapshot()
  })
})
