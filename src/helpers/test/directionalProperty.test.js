// @flow
import directionalProperty from '../directionalProperty'

describe('directionalProperty', () => {
  it('properly generates properties when passed a hyphenated property', () => {
    expect(directionalProperty('border-width', '12px')).toEqual({
      borderBottomWidth: '12px',
      borderLeftWidth: '12px',
      borderRightWidth: '12px',
      borderTopWidth: '12px',
    })
  })

  it('properly generates properties when passed a camelCased property', () => {
    expect(directionalProperty('borderWidth', '12px')).toEqual({
      borderBottomWidth: '12px',
      borderLeftWidth: '12px',
      borderRightWidth: '12px',
      borderTopWidth: '12px',
    })
  })

  it('properly passes just the position when not given a property', () => {
    expect(directionalProperty('', '12px')).toEqual({
      bottom: '12px',
      left: '12px',
      right: '12px',
      top: '12px',
    })
  })

  it('properly sets unitless 0', () => {
    expect(directionalProperty('', 0)).toEqual({
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    })
  })

  // One Param
  it('properly applies a value when passed only one', () => {
    expect(directionalProperty('border', '12px')).toEqual({
      borderBottom: '12px',
      borderLeft: '12px',
      borderRight: '12px',
      borderTop: '12px',
    })
  })

  it('properly applies a integer value when passed only one', () => {
    expect(directionalProperty('border', 12)).toEqual({
      borderBottom: 12,
      borderLeft: 12,
      borderRight: 12,
      borderTop: 12,
    })
  })

  // Two Params
  it('properly applies values when passed two', () => {
    expect(directionalProperty('border', '12px', '24px')).toEqual({
      borderBottom: '12px',
      borderLeft: '24px',
      borderRight: '24px',
      borderTop: '12px',
    })
  })
  it('properly applies values when passed two integers', () => {
    expect(directionalProperty('border', 12, 24)).toEqual({
      borderBottom: 12,
      borderLeft: 24,
      borderRight: 24,
      borderTop: 12,
    })
  })
  it('properly applies values when passed a string and an integer', () => {
    expect(directionalProperty('border', 12, '24px')).toEqual({
      borderBottom: 12,
      borderLeft: '24px',
      borderRight: '24px',
      borderTop: 12,
    })
  })
  it('properly skips top and bottom properties when first value is null', () => {
    expect(directionalProperty('border', null, '12px')).toEqual({
      borderLeft: '12px',
      borderRight: '12px',
    })
  })
  it('properly skips left and right properties when second value is null', () => {
    expect(directionalProperty('border', '12px', null)).toEqual({
      borderBottom: '12px',
      borderTop: '12px',
    })
  })

  // Three Params
  it('properly applies values when passed three', () => {
    expect(directionalProperty('border', '12px', '24px', '36px')).toEqual({
      borderBottom: '36px',
      borderLeft: '24px',
      borderRight: '24px',
      borderTop: '12px',
    })
  })
  it('properly skips top property when first value is null', () => {
    expect(directionalProperty('border', null, '24px', '36px')).toEqual({
      borderBottom: '36px',
      borderLeft: '24px',
      borderRight: '24px',
    })
  })
  it('properly skips right and left properties when second value is null', () => {
    expect(directionalProperty('border', '12px', null, '36px')).toEqual({
      borderBottom: '36px',
      borderTop: '12px',
    })
  })
  it('properly skips bottom property when last value is null', () => {
    expect(directionalProperty('border', '12px', '24px', null)).toEqual({
      borderLeft: '24px',
      borderRight: '24px',
      borderTop: '12px',
    })
  })
  it('properly applies values when passed a mixture of three value types', () => {
    expect(directionalProperty('border', 12, '24px', null)).toEqual({
      borderLeft: '24px',
      borderRight: '24px',
      borderTop: 12,
    })
  })

  // Four Params
  it('properly applies values when passed four', () => {
    expect(directionalProperty('border', '12px', '24px', '36px', '48px')).toEqual({
      borderBottom: '36px',
      borderLeft: '48px',
      borderRight: '24px',
      borderTop: '12px',
    })
  })
  it('properly skips top property when first value is null', () => {
    expect(directionalProperty('border', null, '24px', '36px', '48px')).toEqual({
      borderBottom: '36px',
      borderLeft: '48px',
      borderRight: '24px',
    })
  })
  it('properly skips right property when second value is null', () => {
    expect(directionalProperty('border', '12px', null, '36px', '48px')).toEqual({
      borderBottom: '36px',
      borderLeft: '48px',
      borderTop: '12px',
    })
  })
  it('properly skips bottom property when third value is null', () => {
    expect(directionalProperty('border', '12px', '24px', null, '48px')).toEqual({
      borderLeft: '48px',
      borderRight: '24px',
      borderTop: '12px',
    })
  })
  it('properly skips left property when fourth value is null', () => {
    expect(directionalProperty('border', '12px', '24px', '36px', null)).toEqual({
      borderBottom: '36px',
      borderRight: '24px',
      borderTop: '12px',
    })
  })
  it('properly applies valuew when passed a mixture of four value types', () => {
    expect(directionalProperty('border', 12, '24px', 36, null)).toEqual({
      borderBottom: 36,
      borderRight: '24px',
      borderTop: 12,
    })
  })
})
