// @flow
import setSaturation from '../setSaturation'

describe('setSaturation', () => {
  it('should update the saturation of an hex color and return a hex color', () => {
    expect(setSaturation(0.2, '#CCCD64')).toMatchSnapshot()
  })

  it('should update the saturation of an 8-digit hex color and return an rgba color', () => {
    expect(setSaturation(0.2, '#6564CDB3')).toMatchSnapshot()
  })

  it('should update the saturation of an rgb color and return a hex color', () => {
    expect(setSaturation(0.2, 'rgb(101,100,205)')).toMatchSnapshot()
  })

  it('should update the saturation of an rgba color and return an rgba color', () => {
    expect(setSaturation(0.2, 'rgba(101,100,205,0.7)')).toMatchSnapshot()
  })

  it('should update the saturation when passed a string', () => {
    expect(setSaturation('0.75', 'rgba(204,205,100,0.7)')).toMatchSnapshot()
  })
})
