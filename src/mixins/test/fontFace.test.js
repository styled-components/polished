// @flow
import fontFace from '../fontFace'

describe('fontFace', () => {
  it('should return a valid object when passed just a family and source', () => {
    expect({ ...fontFace(
      {
        fontFamily: 'Sans Pro',
        fontFilePath: 'path/to/file',
      },
    ) }).toMatchSnapshot()
  })

  it('should return a valid object when passed both local and file-based sources', () => {
    expect({ ...fontFace(
      {
        fontFamily: 'Sans Pro',
        localFonts: ['sans-pro'],
        fontFilePath: 'path/to/file',
      },
    ) }).toMatchSnapshot()
  })

  it('should return a valid object when passed both a file-based source and multiple local sources', () => {
    expect({ ...fontFace(
      {
        fontFamily: 'Sans Pro',
        localFonts: ['sans-pro', 'sans pro'],
        fontFilePath: 'path/to/file',
      },
    ) }).toMatchSnapshot()
  })

  it('should return a valid object when passed only local sources', () => {
    expect({ ...fontFace(
      {
        fontFamily: 'Sans Pro',
        localFonts: ['sans-pro', 'sans pro'],
      },
    ) }).toMatchSnapshot()
  })

  it('should respect the file format configuration object', () => {
    expect({ ...fontFace(
      {
        fontFamily: 'Sans Pro',
        fontFilePath: 'path/to/file',
        fileFormats: ['eot', 'svg'],
      },
    ) }).toMatchSnapshot()
  })

  it('should set passed font configuration variables', () => {
    expect({ ...fontFace(
      {
        fontFamily: 'Sans Pro',
        fontFilePath: 'path/to/file',
        fontStretch: 'condensed',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontVariant: 'small-caps',
        unicodeRange: 'U+26',
      },
    ) }).toMatchSnapshot()
  })

  it('should throw an error when not passed a fontfamily', () => {
    expect(() => {
      // $FlowIgnoreNextLine since the coming is invalid code, flow complains
      fontFace(
        {
          fontFilePath: 'path/to/file',
        },
      )
    }).toThrow('fontFace expects a name of a font-family.')
  })

  it('should throw an error when not passed a file path or a local source', () => {
    expect(() => {
      fontFace(
        {
          fontFamily: 'Sans Pro',
        },
      )
    }).toThrow('fontFace expects either the path to the font file(s) or a name of a local copy.')
  })

  it('should throw an error when localFonts is not an array', () => {
    expect(() => {
      fontFace(
        {
          fontFamily: 'Sans Pro',
          fontFilePath: 'path/to/file',
          // $FlowIgnoreNextLine since the coming is invalid code, flow complains
          localFonts: 'Helvetica',
        },
      )
    }).toThrow('fontFace expects localFonts to be an array.')
  })

  it('should throw an error when fileFormats is not an array', () => {
    expect(() => {
      fontFace(
        {
          fontFamily: 'Sans Pro',
          fontFilePath: 'path/to/file',
          // $FlowIgnoreNextLine since the coming is invalid code, flow complains
          fileFormats: 'svg',
        },
      )
    }).toThrow('fontFace expects fileFormats to be an array.')
  })
})
