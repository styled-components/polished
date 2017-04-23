// @flow
import directionalProperty from '../directionalProperty'

describe('directionalProperty', () => {
  beforeAll(() => {
    global.console = { log: jest.fn() }
  })

  it('properly generates properties when passed a hyphenated property', () => {
    expect(directionalProperty('border-width', '12px')).toMatchSnapshot()
  })
  it('properly passes just the position when not given a property', () => {
    expect(directionalProperty('', '12px')).toMatchSnapshot()
  })

  // One Param
  it('properly applies a value when passed only one', () => {
    expect(directionalProperty('border', '12px')).toMatchSnapshot()
  })

  // Two Params
  it('properly applies values when passed two', () => {
    expect(directionalProperty('border', '12px', '24px')).toMatchSnapshot()
  })
  it('properly skips top and bottom properties when first value is null', () => {
    expect(directionalProperty('border', null, '12px')).toMatchSnapshot()
  })
  it('properly skips left and right properties when second value is null', () => {
    expect(directionalProperty('border', '12px', null)).toMatchSnapshot()
  })

  // Three Params
  it('properly applies values when passed three', () => {
    expect(directionalProperty('border', '12px', '24px', '36px')).toMatchSnapshot()
  })
  it('properly skips top property when first value is null', () => {
    expect(directionalProperty('border', null, '24px', '36px')).toMatchSnapshot()
  })
  it('properly skips right and left properties when second value is null', () => {
    expect(directionalProperty('border', '12px', null, '36px')).toMatchSnapshot()
  })
  it('properly skips bottom property when last value is null', () => {
    expect(directionalProperty('border', '12px', '24px', null)).toMatchSnapshot()
  })

  // Four Params
  it('properly applies values when passed four', () => {
    expect(directionalProperty('border', '12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
  it('properly skips top property when first value is null', () => {
    expect(directionalProperty('border', null, '24px', '36px', '48px')).toMatchSnapshot()
  })
  it('properly skips right property when second value is null', () => {
    expect(directionalProperty('border', '12px', null, '36px', '48px')).toMatchSnapshot()
  })
  it('properly skips bottom property when third value is null', () => {
    expect(directionalProperty('border', '12px', '24px', null, '48px')).toMatchSnapshot()
  })
  it('properly skips left property when fourth value is null', () => {
    expect(directionalProperty('border', '12px', '24px', '36px', null)).toMatchSnapshot()
  })

  it('properly errors when passed no params', () => {
    // $FlowIgnoreNextLine since the coming is invalid code, flow complains
    expect(directionalProperty())
    // eslint-disable-next-line no-console
    expect(console.log).toBeCalled()
  })

  it('properly errors when passed only one param', () => {
    expect(directionalProperty('border-width'))
    // eslint-disable-next-line no-console
    expect(console.log).toBeCalled()
  })

  it('properly warns when passed too many params', () => {
    expect(directionalProperty('border-width', '2px', '2px', '2px', '2px', '2px'))
    // eslint-disable-next-line no-console
    expect(console.log).toBeCalled()
  })
})
