// @flow
import retinaImage from '../retinaImage'

describe('retinaImage', () => {
  it('should throw an error if no filename is passed', () => {
    // $FlowFixMe
    expect(() => ({ ...retinaImage() })).toThrow()
  })

  it('should use _2x and png as the default suffix and extension, respectively', () => {
    expect({ ...retinaImage('img') }).toEqual({
      [`
    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),
    only screen and (min--moz-device-pixel-ratio: 1.3),
    only screen and (-o-min-device-pixel-ratio: 1.3/1),
    only screen and (min-resolution: 125dpi),
    only screen and (min-resolution: 1.3dppx)
  `]: {
        backgroundImage: 'url(img_2x.png)',
      },
      backgroundImage: 'url(img.png)',
    })
  })

  it('should set the background-size if one is passed in', () => {
    expect({ ...retinaImage('img', 'cover') }).toEqual({
      [`
    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),
    only screen and (min--moz-device-pixel-ratio: 1.3),
    only screen and (-o-min-device-pixel-ratio: 1.3/1),
    only screen and (min-resolution: 125dpi),
    only screen and (min-resolution: 1.3dppx)
  `]: {
        backgroundImage: 'url(img_2x.png)',
        backgroundSize: 'cover',
      },
      backgroundImage: 'url(img.png)',
    })
  })

  it('should set the extension if one is passed in', () => {
    expect({ ...retinaImage('img', undefined, 'jpg') }).toEqual({
      [`
    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),
    only screen and (min--moz-device-pixel-ratio: 1.3),
    only screen and (-o-min-device-pixel-ratio: 1.3/1),
    only screen and (min-resolution: 125dpi),
    only screen and (min-resolution: 1.3dppx)
  `]: {
        backgroundImage: 'url(img_2x.jpg)',
      },
      backgroundImage: 'url(img.jpg)',
    })
  })

  it('should allow passing in an extension with a dot', () => {
    expect({ ...retinaImage('img', undefined, '.jpg') }).toEqual({
      [`
    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),
    only screen and (min--moz-device-pixel-ratio: 1.3),
    only screen and (-o-min-device-pixel-ratio: 1.3/1),
    only screen and (min-resolution: 125dpi),
    only screen and (min-resolution: 1.3dppx)
  `]: {
        backgroundImage: 'url(img_2x.jpg)',
      },
      backgroundImage: 'url(img.jpg)',
    })
  })

  it('should allow passing in a separate filename for the retina version', () => {
    expect({
      ...retinaImage('img', undefined, undefined, 'retina_img'),
    }).toEqual({
      [`
    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),
    only screen and (min--moz-device-pixel-ratio: 1.3),
    only screen and (-o-min-device-pixel-ratio: 1.3/1),
    only screen and (min-resolution: 125dpi),
    only screen and (min-resolution: 1.3dppx)
  `]: {
        backgroundImage: 'url(retina_img.png)',
      },
      backgroundImage: 'url(img.png)',
    })
  })

  it('should allow passing in a separate suffix for the retina version', () => {
    expect({
      ...retinaImage('img', undefined, undefined, undefined, '_5x'),
    }).toEqual({
      [`
    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),
    only screen and (min--moz-device-pixel-ratio: 1.3),
    only screen and (-o-min-device-pixel-ratio: 1.3/1),
    only screen and (min-resolution: 125dpi),
    only screen and (min-resolution: 1.3dppx)
  `]: {
        backgroundImage: 'url(img_5x.png)',
      },
      backgroundImage: 'url(img.png)',
    })
  })
})
