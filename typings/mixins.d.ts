import { Direction } from "./common";

export interface FontFaceConfiguration {
  fontFamily: string;
  fontFilePath?: string;
  fontStretch?: string;
  fontStyle?: string;
  fontVariant?: string;
  fontWeight?: string;
  fileFormats?: Array<string>;
  localFonts?: Array<string>;
  unicodeRange?: string;
}

export interface RadialGradientConfiguration {
  colorStops: Array<string>;
  extent?: string;
  fallback?: string;
  position?: string;
  shape?: string;
}

export type TimingFunction =
  | "easeInBack"
  | "easeInCirc"
  | "easeInCubic"
  | "easeInExpo"
  | "easeInQuad"
  | "easeInQuart"
  | "easeInQuint"
  | "easeInSine"
  | "easeOutBack"
  | "easeOutCubic"
  | "easeOutCirc"
  | "easeOutExpo"
  | "easeOutQuad"
  | "easeOutQuart"
  | "easeOutQuint"
  | "easeOutSine"
  | "easeInOutBack"
  | "easeInOutCirc"
  | "easeInOutCubic"
  | "easeInOutExpo"
  | "easeInOutQuad"
  | "easeInOutQuart"
  | "easeInOutQuint"
  | "easeInOutSine";

interface BorderWidthArgs {
  height: number;
  width: number;
  pointingDirection: Direction;
}

interface TriangleArgs extends BorderWidthArgs {
  color: string;
}

/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '',
 *   'display': 'table'
 * }
 */

export function clearFix(parent?: string): object;

/**
 * CSS to represent truncated text with an ellipsis.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis('250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis('250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'max-width': '250px',
 *   'overflow': 'hidden',
 *   'text-overflow': 'ellipsis',
 *   'white-space': 'nowrap',
 *   'word-wrap': 'normal'
 * }
 */

export function ellipsis(width?: string): object;

/**
 * CSS for a @font-face declaration.
 *
 * @example
 * // Styles as object basic usage
 * const styles = {
 *    ...fontFace({
 *      'fontFamily': 'Sans-Pro'
 *      'fontFilePath': 'path/to/file'
 *    })
 * }
 *
 * // styled-components basic usage
 * injectGlobal`${
 *   fontFace({
 *     'fontFamily': 'Sans-Pro'
 *     'fontFilePath': 'path/to/file'
 *   }
 * )}`
 *
 * // CSS as JS Output
 *
 * '@font-face': {
 *   'font-family': 'Sans-Pro',
 *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
 * }
 */

export function fontFace(config: FontFaceConfiguration): object;

/**
 * CSS to hide text to show a background image in a SEO-friendly way.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'background-image': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background-image: url(logo.png);
 *   ${hideText()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'background-image': 'url(logo.png)',
 *   'text-indent': '101%',
 *   'overflow': 'hidden',
 *   'white-space': 'nowrap',
 * }
 */
export function hideText(): object;

/**
 * Generates a media query to target HiDPI devices.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  [hiDPI(1.5)]: {
 *    width: 200px;
 *  }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hiDPI(1.5)} {
 *     width: 200px;
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 *  only screen and (min--moz-device-pixel-ratio: 1.5),
 *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
 *  only screen and (min-resolution: 144dpi),
 *  only screen and (min-resolution: 1.5dppx)': {
 *   'width': '200px',
 * }
 */
export function hiDPI(ratio?: number): string;

/**
 * CSS to normalize abnormalities across browsers (normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * injectGlobal`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   font-family: sans-serif,
 *   line-height: 1.15,
 *   -ms-text-size-adjust: 100%,
 *   -webkit-text-size-adjust: 100%,
 * } ...
 */
export function normalize(excludeOpinionated?: boolean): object;

/**
 * CSS to style the selection psuedo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...placeholder({'color': 'blue'})
 * }
 *
 * // styled-components usage
 * const div = styled.input`
 *    ${placeholder({'color': 'blue'})}
 * `
 *
 * // CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'blue',
 *   },
 * },
 */
export function placeholder(styles: object, parent?: string): object;

/**
 * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'background-color': '#00FFFF',
 *   'background-image': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */
export function radialGradient(config: RadialGradientConfiguration): object;

/**
 * The retina-image mixin is a helper to generate a retina background image and non-retina
 * background image. The retina background image will output to a HiDPI media query. The mixin uses
 * a _2x.png filename suffix by default.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  ...retinaImage('my-img')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${retinaImage('my-img')}
 * `
 *
 * // CSS as JS Output
 * div {
 *   backgroundImage: 'url(my-img.png)',
 *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
 *    only screen and (min--moz-device-pixel-ratio: 1.3),
 *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
 *    only screen and (min-resolution: 144dpi),
 *    only screen and (min-resolution: 1.5dppx)': {
 *     backgroundImage: 'url(my-img_2x.png)',
 *   }
 * }
 */
export function retinaImage(filename: string, backgroundSize?: string, extension?: string, retinaFilename?: string, retinaSuffix?: string): object;

/**
 * CSS to style the selection psuedo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...selection({
 *     'background': 'blue'
 *   }, 'section')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${selection({'background': 'blue'}, 'section')}
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'section::-moz-selection': {
 *     'background-color':'blue',
 *   },
 *   'section::selection': {
 *     'background-color': 'blue',
 *   }
 * }
 */
export function selection(styles: object, parent?: string): object;

/**
 * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transition-timing-function': timingFunctions('easeInQuad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transition-timing-function: ${timingFunctions('easeInQuad')};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'transition-timing-function': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
 * }
 */
export function timingFunctions(timingFunction: TimingFunction): string;

/**
 * CSS to represent triangle with any pointing direction.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...triangle({ pointingDirection: 'right', width: 100, height: 100, color: 'red' })
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${triangle({ pointingDirection: 'right', width: 100, height: 100, color: 'red' })}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *  'border-color': 'transparent',
 *  'border-left-color': 'red !important',
 *  'border-style': 'solid',
 *  'border-width': '50px 0 50px 100px',
 *  'height': '0',
 *  'width': '0',
 * }
 */
export function triangle(args: TriangleArgs): object;

/**
 * Provides an easy way to change the `word-wrap` property.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...wordWrap('break-all')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-all')}
 * `
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflow-wrap: 'break-all',
 *   word-wrap: 'break-all',
 *   word-break: 'break-all',
 * }
 */
export function wordWrap(wrap?: string): object;
