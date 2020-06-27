// @flow
import getValueAndUnit from '../getValueAndUnit'

describe('getValueAndUnit', () => {
  it('should get value and px from whole values', () => {
    expect(getValueAndUnit('1px')).toEqual([1, 'px'])
  })

  it('should get value and px from values', () => {
    expect(getValueAndUnit('1.5px')).toEqual([1.5, 'px'])
  })

  it('should get value and pt from whole values', () => {
    expect(getValueAndUnit('1pt')).toEqual([1, 'pt'])
  })

  it('should get value and pt from values', () => {
    expect(getValueAndUnit('1.5pt')).toEqual([1.5, 'pt'])
  })

  it('should get value and pc from whole values', () => {
    expect(getValueAndUnit('1pc')).toEqual([1, 'pc'])
  })

  it('should get value and pc from values', () => {
    expect(getValueAndUnit('1.5pc')).toEqual([1.5, 'pc'])
  })

  it('should get value and mm from whole values', () => {
    expect(getValueAndUnit('1mm')).toEqual([1, 'mm'])
  })

  it('should get value and mm from values', () => {
    expect(getValueAndUnit('1.5mm')).toEqual([1.5, 'mm'])
  })

  it('should get value and q from whole values', () => {
    expect(getValueAndUnit('1q')).toEqual([1, 'q'])
  })

  it('should get value and q from values', () => {
    expect(getValueAndUnit('1.5q')).toEqual([1.5, 'q'])
  })

  it('should get value and cm from whole values', () => {
    expect(getValueAndUnit('1cm')).toEqual([1, 'cm'])
  })

  it('should get value and cm from values', () => {
    expect(getValueAndUnit('1.5cm')).toEqual([1.5, 'cm'])
  })

  it('should get value and in from whole values', () => {
    expect(getValueAndUnit('1in')).toEqual([1, 'in'])
  })

  it('should get value and in from values', () => {
    expect(getValueAndUnit('1.5in')).toEqual([1.5, 'in'])
  })

  it('should get value and em from whole value', () => {
    expect(getValueAndUnit('1em')).toEqual([1, 'em'])
  })

  it('should get value and em from decimal values', () => {
    expect(getValueAndUnit('1.2em')).toEqual([1.2, 'em'])
  })

  it('should get value and rem from whole values', () => {
    expect(getValueAndUnit('1rem')).toEqual([1, 'rem'])
  })

  it('should get value and rem from decimal values', () => {
    expect(getValueAndUnit('1.2rem')).toEqual([1.2, 'rem'])
  })

  it('should get value and ex from whole values', () => {
    expect(getValueAndUnit('1ex')).toEqual([1, 'ex'])
  })

  it('should get value and ex from decimal values', () => {
    expect(getValueAndUnit('1.2ex')).toEqual([1.2, 'ex'])
  })

  it('should get value and ch from whole values', () => {
    expect(getValueAndUnit('1ch')).toEqual([1, 'ch'])
  })

  it('should get value and ch from decimal values', () => {
    expect(getValueAndUnit('1.2ch')).toEqual([1.2, 'ch'])
  })

  it('should get value and vh from whole values', () => {
    expect(getValueAndUnit('100vh')).toEqual([100, 'vh'])
  })

  it('should get value and vh from decimal values', () => {
    expect(getValueAndUnit('33.33vh')).toEqual([33.33, 'vh'])
  })

  it('should get value and vw from whole values', () => {
    expect(getValueAndUnit('100vw')).toEqual([100, 'vw'])
  })

  it('should get value and vw from decimal values', () => {
    expect(getValueAndUnit('33.33vw')).toEqual([33.33, 'vw'])
  })

  it('should get value and vmin from whole values', () => {
    expect(getValueAndUnit('100vmin')).toEqual([100, 'vmin'])
  })

  it('should get value and vmin from decimal values', () => {
    expect(getValueAndUnit('33.33vmin')).toEqual([33.33, 'vmin'])
  })

  it('should get value and vmax from whole values', () => {
    expect(getValueAndUnit('100vmax')).toEqual([100, 'vmax'])
  })

  it('should get value and vmax from decimal values', () => {
    expect(getValueAndUnit('33.33vmax')).toEqual([33.33, 'vmax'])
  })

  it('should get value and % from whole values', () => {
    expect(getValueAndUnit('80%')).toEqual([80, '%'])
  })

  it('should get value and % from decimal values', () => {
    expect(getValueAndUnit('33.3%')).toEqual([33.3, '%'])
  })

  it('should return value and no unit when passed a number string', () => {
    expect(getValueAndUnit('33')).toEqual([33, ''])
  })

  it('should return value and no unit when passed a number string', () => {
    expect(getValueAndUnit('33px33')).toEqual(['33px33', undefined])
  })
})
