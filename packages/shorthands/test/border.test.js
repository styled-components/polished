// @flow
import border from '../border'

describe('border', () => {
  it('properly returns separated border styles', () => {
    expect(border('1px', 'solid', 'red')).toMatchSnapshot()
  })
  it('properly returns separated border styles for a specific side', () => {
    expect(border('top', '1px', 'solid', 'red')).toMatchSnapshot()
  })
  it('properly returns separated border styles when passed a number for borderWidth', () => {
    expect(border(1, 'solid', 'red')).toMatchSnapshot()
  })
  it('properly returns separated border styles for a specific side when passed a number for borderWidth', () => {
    expect(border('top', 1, 'solid', 'red')).toMatchSnapshot()
  })
})
