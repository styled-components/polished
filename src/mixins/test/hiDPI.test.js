// @flow
import hiDPI from '../hiDPI'

describe('hiDPI', () => {
  it('should pass ratio to media query', () => {
    expect({
      [hiDPI(1.5)]: {
        width: '200px',
      },
    }).toEqual({
      [`
    @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min--moz-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 1.5/1),
    only screen and (min-resolution: 144dpi),
    only screen and (min-resolution: 1.5dppx)
  `]: {
        width: '200px',
      },
    })
  })

  it('should set a default ratio of 1.3 when no ratio is passed', () => {
    expect({
      [hiDPI()]: {
        width: '200px',
      },
    }).toEqual({
      [`
    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),
    only screen and (min--moz-device-pixel-ratio: 1.3),
    only screen and (-o-min-device-pixel-ratio: 1.3/1),
    only screen and (min-resolution: 125dpi),
    only screen and (min-resolution: 1.3dppx)
  `]: {
        width: '200px',
      },
    })
  })
})
