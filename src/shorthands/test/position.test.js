// @flow
import position from '../position'

describe('position', () => {
  it('properly applies a value when passed only one', () => {
    expect(position('relative', '12px')).toEqual({
      bottom: '12px',
      left: '12px',
      position: 'relative',
      right: '12px',
      top: '12px',
    })
  })
  it('properly applies values when passed two', () => {
    expect(position('relative', '12px', '24px')).toEqual({
      bottom: '12px',
      left: '24px',
      position: 'relative',
      right: '24px',
      top: '12px',
    })
  })
  it('properly applies values when passed three', () => {
    expect(position('relative', '12px', '24px', '36px')).toEqual({
      bottom: '36px',
      left: '24px',
      position: 'relative',
      right: '24px',
      top: '12px',
    })
  })
  it('properly applies values when passed four', () => {
    expect(position('relative', '12px', '24px', '36px', '48px')).toEqual({
      bottom: '36px',
      left: '48px',
      position: 'relative',
      right: '24px',
      top: '12px',
    })
  })
  it('properly ignores position property, when not passed one', () => {
    expect(position('12px', '24px', '36px', '48px')).toEqual({
      bottom: '36px',
      left: '48px',
      right: '24px',
      top: '12px',
    })
  })
  it('properly skips values when passed undefined`', () => {
    expect(position('relative', '12px', null, '36px', '48px')).toEqual({
      bottom: '36px',
      left: '48px',
      position: 'relative',
      top: '12px',
    })
  })
  it('properly skips first value when passed undefined', () => {
    expect(position(null, '24px', '36px', '48px')).toEqual({
      bottom: '36px',
      left: '48px',
      right: '24px',
    })
  })
  it('properly applies values when passed four integers', () => {
    expect(position('relative', 12, 24, 36, 48)).toEqual({
      bottom: 36,
      left: 48,
      position: 'relative',
      right: 24,
      top: 12,
    })
  })
  it('properly applies zero value', () => {
    expect(position('relative', 0)).toEqual({
      bottom: 0,
      left: 0,
      position: 'relative',
      right: 0,
      top: 0,
    })
  })
})
