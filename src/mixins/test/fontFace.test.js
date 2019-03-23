// @flow
import fontFace from '../fontFace'

describe('fontFace', () => {
  it('should return a valid object when passed just a family and source', () => {
    expect({
      ...fontFace({
        fontFamily: 'Sans Pro',
        fontFilePath: 'path/to/file',
      }),
    }).toMatchSnapshot()
  })

  it('should return a valid object when passed both local and file-based sources', () => {
    expect({
      ...fontFace({
        fontFamily: 'Sans Pro',
        localFonts: ['sans-pro'],
        fontFilePath: 'path/to/file',
      }),
    }).toMatchSnapshot()
  })

  it('should return a valid object when passed both a file-based source and multiple local sources', () => {
    expect({
      ...fontFace({
        fontFamily: 'Sans Pro',
        localFonts: ['sans-pro', 'sans pro'],
        fontFilePath: 'path/to/file',
      }),
    }).toMatchSnapshot()
  })

  it('should return a valid object when passed only local sources', () => {
    expect({
      ...fontFace({
        fontFamily: 'Sans Pro',
        localFonts: ['sans-pro', 'sans pro'],
      }),
    }).toMatchSnapshot()
  })

  it('should respect the file format configuration object', () => {
    expect({
      ...fontFace({
        fontFamily: 'Sans Pro',
        fontFilePath: 'path/to/file',
        fileFormats: ['eot', 'svg'],
      }),
    }).toMatchSnapshot()
  })

  it('should return base64 src', () => {
    expect({
      ...fontFace({
        fontFamily: 'Sans Pro',
        fontFilePath:
          'data:application/x-font-woff;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
      }),
    }).toMatchSnapshot()
  })

  it('should return base64 src with format hint', () => {
    expect({
      ...fontFace({
        fontFamily: 'Sans Pro',
        fontFilePath:
          'data:application/x-font-woff;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
        fileFormats: ['woff'],
        formatHint: true,
      }),
    }).toMatchSnapshot()
  })

  it('should set passed font configuration variables', () => {
    expect({
      ...fontFace({
        fontFamily: 'Sans Pro',
        fontFilePath: 'path/to/file',
        fontStretch: 'condensed',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontVariant: 'small-caps',
        unicodeRange: 'U+26',
        fontDisplay: 'swap',
        fontVariationSettings: '"XHGT" 0.7',
        fontFeatureSettings: '"smcp" on',
      }),
    }).toMatchSnapshot()
  })

  it('should set generate format hints', () => {
    expect({
      ...fontFace({
        fontFamily: 'Sans Pro',
        fontFilePath: 'path/to/file',
        fileFormats: ['eot', 'svg', 'svgz', 'woff', 'woff2', 'otf', 'ttf'],
        formatHint: true,
        fontStretch: 'condensed',
        fontStyle: 'italic',
        fontWeight: 'bold',
      }),
    }).toMatchSnapshot()
  })

  it('should throw an error when not passed a fontfamily', () => {
    expect(() => {
      // $FlowFixMe
      fontFace({
        fontFilePath: 'path/to/file',
      })
    }).toThrow('fontFace expects a name of a font-family.')
  })

  it('should throw an error when not passed a file path or a local source', () => {
    expect(() => {
      fontFace({
        fontFamily: 'Sans Pro',
      })
    }).toThrow(
      'fontFace expects either the path to the font file(s) or a name of a local copy.',
    )
  })

  it('should throw an error when localFonts is not an array', () => {
    expect(() => {
      fontFace({
        fontFamily: 'Sans Pro',
        fontFilePath: 'path/to/file',
        // $FlowFixMe
        localFonts: 'Helvetica',
      })
    }).toThrow('fontFace expects localFonts to be an array.')
  })

  it('should throw an error when fileFormats is not an array', () => {
    expect(() => {
      fontFace({
        fontFamily: 'Sans Pro',
        fontFilePath: 'path/to/file',
        // $FlowFixMe
        fileFormats: 'svg',
      })
    }).toThrow('fontFace expects fileFormats to be an array.')
  })
})
