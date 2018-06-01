// @flow

// Warning: opinionatedRules were removed in normalize.css 6.0 and will be deprecated in polished 3.0.
const opinionatedRules = {
  html: {
    fontFamily: 'sans-serif',
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

  body: {
    margin: '0',
  },

  h1: {
    fontSize: '2em',
    margin: '0.67em 0',
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
  },

  'abbr[title]': [
    {
      borderBottom: 'none',
      textDecoration: 'underline',
    },
    {
      textDecoration: 'underline dotted',
    },
  ],

  [`b,
  strong`]: {
    fontWeight: 'bolder',
  },

  [`code,
  kbd,
  samp`]: {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
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

  img: {
    borderStyle: 'none',
  },

  [`button,
  input,
  optgroup,
  select,
  textarea`]: {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
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

  '[type="search"]::-webkit-search-decoration': {
    '-webkit-appearance': 'none',
  },

  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button',
    font: 'inherit',
  },

  details: {
    display: 'block',
  },

  summary: {
    display: 'list-item',
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
 * CSS to normalize abnormalities across browsers (normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css)
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
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */
function normalize(excludeOpinionated?: boolean): Object {
  if (excludeOpinionated) return unopinionatedRules
  return mergeRules(unopinionatedRules, opinionatedRules)
}

export default normalize
