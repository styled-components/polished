// @flow
import border from '../border'

describe('border', () => {
  it('properly returns separated border styles', () => {
    expect(border('1px', 'solid', 'red')).toEqual({
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: '1px',
    })
  })
  it('properly returns separated border styles for a specific side', () => {
    expect(border('top', '1px', 'solid', 'red')).toEqual({
      borderTopColor: 'red',
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
    })
  })
  it('properly returns separated border styles when passed a number for borderWidth', () => {
    expect(border(1, 'solid', 'red')).toEqual({
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: 1,
    })
  })
  it('properly returns separated border styles for a specific side when passed a number for borderWidth', () => {
    expect(border('top', 1, 'solid', 'red')).toEqual({
      borderTopColor: 'red',
      borderTopStyle: 'solid',
      borderTopWidth: 1,
    })
  })
})
