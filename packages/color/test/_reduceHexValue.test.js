import reduceHexValue from '../_reduceHexValue'

describe('reduceHexValue', () => {
  it('should reduce #ffffff to #fff', () => {
    expect(reduceHexValue('#ffffff')).toMatchSnapshot()
  })

  it('should reduce #884422 to #842', () => {
    expect(reduceHexValue('#884422')).toMatchSnapshot()
  })

  it('should not reduce #112234', () => {
    expect(reduceHexValue('#112234')).toMatchSnapshot()
  })

  it('should not reduce #fff', () => {
    expect(reduceHexValue('#fff')).toMatchSnapshot()
  })

  it('should return the value in case it can not be reduced', () => {
    expect(reduceHexValue('You rock!')).toMatchSnapshot()
  })
})
