// @flow
import retinaBorder from '../retinaBorder'

describe('retinaBorder', () => {
  it('should be the default when no color and direction are passed', () => {
    expect(retinaBorder()).toMatchSnapshot()
  })

  it('should set the top border', () => {
    expect(retinaBorder('#c7c7c7', 'top')).toMatchSnapshot()
  })

  it('should set the right border', () => {
    expect(retinaBorder('#c7c7c7', 'right')).toMatchSnapshot()
  })

  it('should set the bottom border', () => {
    expect(retinaBorder('#c7c7c7', 'bottom')).toMatchSnapshot()
  })

  it('should set the left border', () => {
    expect(retinaBorder('#c7c7c7', 'left')).toMatchSnapshot()
  })
})
