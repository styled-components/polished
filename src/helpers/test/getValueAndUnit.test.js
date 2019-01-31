// @flow
import getValueAndUnit from '../getValueAndUnit'

describe('getValueAndUnit', () => {
  it('should get value and px from whole values', () => {
    expect(getValueAndUnit('1px')).toMatchSnapshot()
  })

  it('should get value and px from values', () => {
    expect(getValueAndUnit('1.5px')).toMatchSnapshot()
  })

  it('should get value and pt from whole values', () => {
    expect(getValueAndUnit('1pt')).toMatchSnapshot()
  })

  it('should get value and pt from values', () => {
    expect(getValueAndUnit('1.5pt')).toMatchSnapshot()
  })

  it('should get value and pc from whole values', () => {
    expect(getValueAndUnit('1pc')).toMatchSnapshot()
  })

  it('should get value and pc from values', () => {
    expect(getValueAndUnit('1.5pc')).toMatchSnapshot()
  })

  it('should get value and mm from whole values', () => {
    expect(getValueAndUnit('1mm')).toMatchSnapshot()
  })

  it('should get value and mm from values', () => {
    expect(getValueAndUnit('1.5mm')).toMatchSnapshot()
  })

  it('should get value and q from whole values', () => {
    expect(getValueAndUnit('1q')).toMatchSnapshot()
  })

  it('should get value and q from values', () => {
    expect(getValueAndUnit('1.5q')).toMatchSnapshot()
  })

  it('should get value and cm from whole values', () => {
    expect(getValueAndUnit('1cm')).toMatchSnapshot()
  })

  it('should get value and cm from values', () => {
    expect(getValueAndUnit('1.5cm')).toMatchSnapshot()
  })

  it('should get value and in from whole values', () => {
    expect(getValueAndUnit('1in')).toMatchSnapshot()
  })

  it('should get value and in from values', () => {
    expect(getValueAndUnit('1.5in')).toMatchSnapshot()
  })

  it('should get value and em from whole value', () => {
    expect(getValueAndUnit('1em')).toMatchSnapshot()
  })

  it('should get value and em from decimal values', () => {
    expect(getValueAndUnit('1.2em')).toMatchSnapshot()
  })

  it('should get value and rem from whole values', () => {
    expect(getValueAndUnit('1rem')).toMatchSnapshot()
  })

  it('should get value and rem from decimal values', () => {
    expect(getValueAndUnit('1.2rem')).toMatchSnapshot()
  })

  it('should get value and ex from whole values', () => {
    expect(getValueAndUnit('1ex')).toMatchSnapshot()
  })

  it('should get value and ex from decimal values', () => {
    expect(getValueAndUnit('1.2ex')).toMatchSnapshot()
  })

  it('should get value and ch from whole values', () => {
    expect(getValueAndUnit('1ch')).toMatchSnapshot()
  })

  it('should get value and ch from decimal values', () => {
    expect(getValueAndUnit('1.2ch')).toMatchSnapshot()
  })

  it('should get value and vh from whole values', () => {
    expect(getValueAndUnit('100vh')).toMatchSnapshot()
  })

  it('should get value and vh from decimal values', () => {
    expect(getValueAndUnit('33.33vh')).toMatchSnapshot()
  })

  it('should get value and vw from whole values', () => {
    expect(getValueAndUnit('100vw')).toMatchSnapshot()
  })

  it('should get value and vw from decimal values', () => {
    expect(getValueAndUnit('33.33vw')).toMatchSnapshot()
  })

  it('should get value and vmin from whole values', () => {
    expect(getValueAndUnit('100vmin')).toMatchSnapshot()
  })

  it('should get value and vmin from decimal values', () => {
    expect(getValueAndUnit('33.33vmin')).toMatchSnapshot()
  })

  it('should get value and vmax from whole values', () => {
    expect(getValueAndUnit('100vmax')).toMatchSnapshot()
  })

  it('should get value and vmax from decimal values', () => {
    expect(getValueAndUnit('33.33vmax')).toMatchSnapshot()
  })

  it('should get value and % from whole values', () => {
    expect(getValueAndUnit('80%')).toMatchSnapshot()
  })

  it('should get value and % from decimal values', () => {
    expect(getValueAndUnit('33.3%')).toMatchSnapshot()
  })

  it('should return value and no unit when passed a number string', () => {
    expect(getValueAndUnit('33')).toMatchSnapshot()
  })

  it('should return value and no unit when passed a number', () => {
    expect(getValueAndUnit(33)).toMatchSnapshot()
  })
})
