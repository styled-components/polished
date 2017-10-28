import border from '../border'

describe('border', () => {
  it('properly applies a value when passed only borderWidth', () => {
    expect(border('2px')).toMatchSnapshot()
  })
  it('properly applies values when passed borderWidth and borderStyle', () => {
    expect(border('2px', 'solid')).toMatchSnapshot()
  })
  it('properly applies values when passed borderWidth, borderStyle and borderColor', () => {
    expect(border('2px', 'dashed', '#000')).toMatchSnapshot()
  })
})
