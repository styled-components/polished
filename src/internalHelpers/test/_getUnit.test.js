// @flow

import getUnit from '../_getUnit'

describe('getUnit', () => {
  it('should get px from whole values', () => {
    expect(getUnit('1px')).toMatchSnapshot()
  })

  it('should get px from values', () => {
    expect(getUnit('1.5px')).toMatchSnapshot()
  })

  it('should get pt from whole values', () => {
    expect(getUnit('1pt')).toMatchSnapshot()
  })

  it('should get pt from values', () => {
    expect(getUnit('1.5pt')).toMatchSnapshot()
  })

  it('should get pc from whole values', () => {
    expect(getUnit('1pc')).toMatchSnapshot()
  })

  it('should get pc from values', () => {
    expect(getUnit('1.5pc')).toMatchSnapshot()
  })

  it('should get mm from whole values', () => {
    expect(getUnit('1mm')).toMatchSnapshot()
  })

  it('should get mm from values', () => {
    expect(getUnit('1.5mm')).toMatchSnapshot()
  })

  it('should get q from whole values', () => {
    expect(getUnit('1q')).toMatchSnapshot()
  })

  it('should get q from values', () => {
    expect(getUnit('1.5q')).toMatchSnapshot()
  })

  it('should get cm from whole values', () => {
    expect(getUnit('1cm')).toMatchSnapshot()
  })

  it('should get cm from values', () => {
    expect(getUnit('1.5cm')).toMatchSnapshot()
  })

  it('should get in from whole values', () => {
    expect(getUnit('1in')).toMatchSnapshot()
  })

  it('should get in from values', () => {
    expect(getUnit('1.5in')).toMatchSnapshot()
  })

  it('should get em from whole value', () => {
    expect(getUnit('1em')).toMatchSnapshot()
  })

  it('should get em from decimal values', () => {
    expect(getUnit('1.2em')).toMatchSnapshot()
  })

  it('should get rem from whole values', () => {
    expect(getUnit('1rem')).toMatchSnapshot()
  })

  it('should get rem from decimal values', () => {
    expect(getUnit('1.2rem')).toMatchSnapshot()
  })

  it('should get ex from whole values', () => {
    expect(getUnit('1ex')).toMatchSnapshot()
  })

  it('should get ex from decimal values', () => {
    expect(getUnit('1.2ex')).toMatchSnapshot()
  })

  it('should get ch from whole values', () => {
    expect(getUnit('1ch')).toMatchSnapshot()
  })

  it('should get ch from decimal values', () => {
    expect(getUnit('1.2ch')).toMatchSnapshot()
  })

  it('should get vh from whole values', () => {
    expect(getUnit('100vh')).toMatchSnapshot()
  })

  it('should get vh from decimal values', () => {
    expect(getUnit('33.33vh')).toMatchSnapshot()
  })

  it('should get vw from whole values', () => {
    expect(getUnit('100vw')).toMatchSnapshot()
  })

  it('should get vw from decimal values', () => {
    expect(getUnit('33.33vw')).toMatchSnapshot()
  })

  it('should get vmin from whole values', () => {
    expect(getUnit('100vmin')).toMatchSnapshot()
  })

  it('should get vmin from decimal values', () => {
    expect(getUnit('33.33vmin')).toMatchSnapshot()
  })

  it('should get vmax from whole values', () => {
    expect(getUnit('100vmax')).toMatchSnapshot()
  })

  it('should get vmax from decimal values', () => {
    expect(getUnit('33.33vmax')).toMatchSnapshot()
  })

  it('should get % from whole values', () => {
    expect(getUnit('80%')).toMatchSnapshot()
  })

  it('should get % from decimal values', () => {
    expect(getUnit('33.3%')).toMatchSnapshot()
  })

  it('should return null when passed a unitless value', () => {
    expect(getUnit('100')).toMatchSnapshot()
  })

  it('should return null when passed an untouched string', () => {
    expect(getUnit('red')).toMatchSnapshot()
  })
})
