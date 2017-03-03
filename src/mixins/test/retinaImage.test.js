// @flow
import retinaImage from '../retinaImage'

describe('retinaImage', () => {
  it('should throw an error if no filename is passed', () => {
    // $FlowIgnoreNextLine since the coming is invalid code, flow complains
    expect(() => ({ ...retinaImage() })).toThrow()
  })

  it('should use _2x and png as the default suffix and extension, respectively', () => {
    expect({ ...retinaImage('img') }).toMatchSnapshot()
  })

  it('should set the background-size if one is passed in', () => {
    expect({ ...retinaImage('img', 'cover') }).toMatchSnapshot()
  })

  it('should set the extension if one is passed in', () => {
    expect({ ...retinaImage('img', undefined, 'jpg') }).toMatchSnapshot()
  })

  it('should allow passing in an extension with a dot', () => {
    expect({ ...retinaImage('img', undefined, '.jpg') }).toMatchSnapshot()
  })

  it('should allow passing in a separate filename for the retina version', () => {
    expect({ ...retinaImage('img', undefined, undefined, 'retina_img') }).toMatchSnapshot()
  })

  it('should allow passing in a separate suffix for the retina version', () => {
    expect({ ...retinaImage('img', undefined, undefined, undefined, '_5x') }).toMatchSnapshot()
  })
})
