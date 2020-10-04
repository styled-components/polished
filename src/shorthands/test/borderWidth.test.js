// @flow
import borderWidth from '../borderWidth'

describe('borderWidth', () => {
  it('properly applies a value when passed only one', () => {
    expect(borderWidth('12px')).toEqual({
      borderBottomWidth: '12px',
      borderLeftWidth: '12px',
      borderRightWidth: '12px',
      borderTopWidth: '12px',
    })
  })
  it('properly applies values when passed two', () => {
    expect(borderWidth('12px', '24px')).toEqual({
      borderBottomWidth: '12px',
      borderLeftWidth: '24px',
      borderRightWidth: '24px',
      borderTopWidth: '12px',
    })
  })
  it('properly applies values when passed three', () => {
    expect(borderWidth('12px', '24px', '36px')).toEqual({
      borderBottomWidth: '36px',
      borderLeftWidth: '24px',
      borderRightWidth: '24px',
      borderTopWidth: '12px',
    })
  })
  it('properly applies values when passed four', () => {
    expect(borderWidth('12px', '24px', '36px', '48px')).toEqual({
      borderBottomWidth: '36px',
      borderLeftWidth: '48px',
      borderRightWidth: '24px',
      borderTopWidth: '12px',
    })
  })
  it('properly applies values when passed integers', () => {
    expect(borderWidth(12, 24, 36, 48)).toEqual({
      borderBottomWidth: 36,
      borderLeftWidth: 48,
      borderRightWidth: 24,
      borderTopWidth: 12,
    })
  })
  it('properly applies values when passed zero', () => {
    expect(borderWidth(0)).toEqual({
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopWidth: 0,
    })
  })
})
