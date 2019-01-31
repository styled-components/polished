// @flow
import PolishedError from '../internalHelpers/_errors'

import type { FontFaceConfiguration } from '../types/fontFaceConfiguration'
import type { Styles } from '../types/style'

function generateFileReferences(
  fontFilePath: string,
  fileFormats: Array<string>,
): string {
  const fileFontReferences = fileFormats.map(
    format => `url("${fontFilePath}.${format}")`,
  )
  return fileFontReferences.join(', ')
}

function generateLocalReferences(localFonts: Array<string>): string {
  const localFontReferences = localFonts.map(font => `local("${font}")`)
  return localFontReferences.join(', ')
}

function generateSources(
  fontFilePath?: string,
  localFonts?: Array<string>,
  fileFormats: Array<string>,
): string {
  const fontReferences = []
  if (localFonts) fontReferences.push(generateLocalReferences(localFonts))
  if (fontFilePath) {
    fontReferences.push(generateFileReferences(fontFilePath, fileFormats))
  }
  return fontReferences.join(', ')
}

/**
 * CSS for a @font-face declaration.
 *
 * @example
 * // Styles as object basic usage
 * const styles = {
 *    ...fontFace({
 *      'fontFamily': 'Sans-Pro',
 *      'fontFilePath': 'path/to/file'
 *    })
 * }
 *
 * // styled-components basic usage
 * const GlobalStyle = createGlobalStyle`${
 *   fontFace({
 *     'fontFamily': 'Sans-Pro',
 *     'fontFilePath': 'path/to/file'
 *   }
 * )}`
 *
 * // CSS as JS Output
 *
 * '@font-face': {
 *   'fontFamily': 'Sans-Pro',
 *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
 * }
 */
function fontFace({
  fontFamily,
  fontFilePath,
  fontStretch,
  fontStyle,
  fontVariant,
  fontWeight,
  fileFormats = ['eot', 'woff2', 'woff', 'ttf', 'svg'],
  localFonts,
  unicodeRange,
  fontDisplay,
  fontVariationSettings,
  fontFeatureSettings,
}: FontFaceConfiguration): Styles {
  // Error Handling
  if (!fontFamily) throw new PolishedError(55)
  if (!fontFilePath && !localFonts) {
    throw new PolishedError(52)
  }
  if (localFonts && !Array.isArray(localFonts)) {
    throw new PolishedError(53)
  }
  if (!Array.isArray(fileFormats)) {
    throw new PolishedError(54)
  }

  const fontFaceDeclaration = {
    '@font-face': {
      fontFamily,
      src: generateSources(fontFilePath, localFonts, fileFormats),
      unicodeRange,
      fontStretch,
      fontStyle,
      fontVariant,
      fontWeight,
      fontDisplay,
      fontVariationSettings,
      fontFeatureSettings,
    },
  }

  // Removes undefined fields for cleaner css object.
  return JSON.parse(JSON.stringify(fontFaceDeclaration))
}

export default fontFace
