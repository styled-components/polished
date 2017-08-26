// @flow
const opinionatedRules = {
  html: {
    fontFamily: 'sans-serif',
  },

  body: {
    margin: '0',
  },

  [`a:active,
  a:hover`]: {
    outlineWidth: '0',
  },

  [`button,
  input,
  optgroup,
  select,
  textarea`]: {
    fontFamily: 'sans-serif',
    fontSize: '100%',
    lineHeight: '1.15',
  },
}

const unopinionatedRules = {
  html: {
    lineHeight: '1.15',
    textSizeAdjust: '100%',
  },

  [`article,
  aside,
  footer,
  header,
  nav,
  section`]: {
    display: 'block',
  },

  h1: {
    fontSize: '2em',
    margin: '0.67em 0',
  },

  [`figcaption,
  figure,
  main`]: {
    display: 'block',
  },

  figure: {
    margin: '1em 40px',
  },

  hr: {
    boxSizing: 'content-box',
    height: '0',
    overflow: 'visible',
  },

  pre: {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },

  a: {
    'background-color': 'transparent',
    '-webkit-text-decoration-skip': 'objects',
  },

  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: 'underline',
    // eslint-disable-next-line no-dupe-keys
    textDecoration: 'underline dotted',
  },

  [`b,
  strong`]: {
    fontWeight: 'inherit',
  },

  [`code,
  kbd,
  samp`]: {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },

  dfn: {
    fontStyle: 'italic',
  },

  mark: {
    backgroundColor: '#ff0',
    color: '#000',
  },

  small: {
    fontSize: '80%',
  },

  [`sub,
  sup`]: {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline',
  },

  sub: {
    bottom: '-0.25em',
  },

  sup: {
    top: '-0.5em',
  },

  [`audio,
  video`]: {
    display: 'inline-block',
  },

  'audio:not([controls])': {
    display: 'none',
    height: '0',
  },

  img: {
    borderStyle: 'none',
  },

  'svg:not(:root)': {
    overflow: 'hidden',
  },

  [`button,
  input,
  optgroup,
  select,
  textarea`]: {
    margin: '0',
  },

  [`button,
  input`]: {
    overflow: 'visible',
  },

  [`button,
  select`]: {
    textTransform: 'none',
  },

  [`button,
  html [type="button"],
  [type="reset"],
  [type="submit"]`]: {
    '-webkit-appearance': 'button',
  },

  [`button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner`]: {
    borderStyle: 'none',
    padding: '0',
  },

  [`button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring`]: {
    outline: '1px dotted ButtonText',
  },

  fieldset: {
    border: '1px solid #c0c0c0',
    margin: '0 2px',
    padding: '0.35em 0.625em 0.75em',
  },

  legend: {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal',
  },

  progress: {
    display: 'inline-block',
    verticalAlign: 'baseline',
  },

  textarea: {
    overflow: 'auto',
  },

  [`[type="checkbox"],
  [type="radio"]`]: {
    boxSizing: 'border-box',
    padding: '0',
  },

  [`[type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button`]: {
    height: 'auto',
  },

  '[type="search"]': {
    '-webkit-appearance': 'textfield',
    outlineOffset: '-2px',
  },

  [`[type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration`]: {
    '-webkit-appearance': 'none',
  },

  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button',
    font: 'inherit',
  },

  [`details,
  menu`]: {
    display: 'block',
  },

  summary: {
    display: 'list-item',
  },

  canvas: {
    display: 'inline-block',
  },

  template: {
    display: 'none',
  },

  '[hidden]': {
    display: 'none',
  },
}

function mergeRules(baseRules: Object, additionalRules: Object): Object {
  const mergedRules = { ...baseRules }
  Object.keys(additionalRules).forEach(key => {
    if (mergedRules[key]) {
      mergedRules[key] = {
        ...mergedRules[key],
        ...additionalRules[key],
      }
    } else {
      mergedRules[key] = {
        ...additionalRules[key],
      }
    }
  })
  return mergedRules
}

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
 *   fontFamily: 'sans-serif',
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */
function normalize(excludeOpinionated?: boolean): Object {
  if (excludeOpinionated) return unopinionatedRules
  return mergeRules(unopinionatedRules, opinionatedRules)
}

export default normalize
