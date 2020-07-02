// @flow
import linearGradient from '../linearGradient'

describe('linearGradient', () => {
  it('returns the correct object when only passed two color stops, including parsed fallback with no percentage', () => {
    expect({
      ...linearGradient({
        colorStops: ['#fff', '#000'],
      }),
    }).toEqual({
      backgroundColor: '#fff',
      backgroundImage: 'linear-gradient(#fff, #000)',
    })
  })

  it('returns the correct object when passed toDirection, including parsed fallback with percentage', () => {
    expect({
      ...linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: '90deg',
      }),
    }).toEqual({
      backgroundColor: '#00FFFF',
      backgroundImage:
        'linear-gradient(90deg, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
    })
  })

  it('properly overrides the fallback when it is passed', () => {
    expect({
      ...linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      }),
    }).toEqual({
      backgroundColor: '#FFF',
      backgroundImage:
        'linear-gradient(to top right, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
    })
  })

  it('should throw an error when not provided at least 2 color-stops', () => {
    expect(() => {
      linearGradient({
        colorStops: ['#00FFFF 0%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })
    }).toThrow(
      'linearGradient requries at least 2 color-stops to properly render.',
    )
  })
})
