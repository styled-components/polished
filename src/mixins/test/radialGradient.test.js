// @flow
import radialGradient from '../radialGradient'

describe('radialGradient', () => {
  it('returns the correct object when only passed two color stops, including parsed fallback with no percentage', () => {
    expect({ ...radialGradient({
      colorStops: ['#fff', '#000'],
    }) }).toMatchSnapshot()
  })

  it('returns the correct object when passed extent, shape, and position, including parsed fallback with percentage', () => {
    expect({ ...radialGradient({
      colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
      extent: 'farthest-corner at 45px 45px',
      position: 'center',
      shape: 'ellipse',
    }) }).toMatchSnapshot()
  })

  it('returns the correct object when passed extent and shape', () => {
    expect({ ...radialGradient({
      colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
      extent: 'farthest-corner at 45px 45px',
      shape: 'ellipse',
    }) }).toMatchSnapshot()
  })

  it('returns the correct object when passed just extent', () => {
    expect({ ...radialGradient({
      colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
      extent: 'farthest-corner at 45px 45px',
    }) }).toMatchSnapshot()
  })

  it('properly overrides the fallback when it is passed', () => {
    expect({ ...radialGradient({
      colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
      extent: 'farthest-corner at 45px 45px',
      fallback: '#FFF',
    }) }).toMatchSnapshot()
  })

  it('should throw an error when not provided at least 2 color-stops', () => {
    expect(() => {
      radialGradient(
        {
          colorStops: ['#00FFFF 0%'],
          extent: 'farthest-corner at 45px 45px',
          fallback: '#FFF',
        },
      )
    }).toThrow('radialGradient requries at least 2 color-stops to properly render.')
  })
})
