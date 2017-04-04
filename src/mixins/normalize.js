// @flow
const opinionatedRules = {
  'html': {
    'font-family': 'sans-serif',
  },

  'body': {
    'margin': '0',
  },

  [`a:active,
  a:hover`]: {
    'outline-width': '0',
  },

  [`button,
  input,
  optgroup,
  select,
  textarea`]: {
    'font-family': 'sans-serif',
    'font-size': '100%',
    'line-height': '1.15',
  },

}

const unopinionatedRules = {
  'html': {
    'line-height': '1.15',
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%',
  },

  [`article,
  aside,
  footer,
  header,
  nav,
  section`]: {
    'display': 'block',
  },

  'h1': {
    'font-size': '2em',
    'margin': '0.67em 0',
  },

  [`figcaption,
  figure,
  main`]: {
    'display': 'block',
  },

  'figure': {
    'margin': '1em 40px',
  },

  'hr': {
    'box-sizing': 'content-box',
    'height': '0',
    'overflow': 'visible',
  },

  'pre': {
    'font-family': 'monospace, monospace',
    'font-size': '1em',
  },

  'a': {
    'background-color': 'transparent',
    '-webkit-text-decoration-skip': 'objects',
  },

  'abbr[title]': {
    'border-bottom': 'none',
    'text-decoration': 'underline',
    // eslint-disable-next-line no-dupe-keys
    'text-decoration': 'underline dotted',
  },

  [`b,
  strong`]: {
    'font-weight': 'inherit',
  },

  [`code,
  kbd,
  samp`]: {
    'font-family': 'monospace, monospace',
    'font-size': '1em',
  },

  'dfn': {
    'font-style': 'italic',
  },

  'mark': {
    'background-color': '#ff0',
    'color': '#000',
  },

  'small': {
    'font-size': '80%',
  },

  [`sub,
  sup`]: {
    'font-size': '75%',
    'line-height': '0',
    'position': 'relative',
    'vertical-align': 'baseline',
  },

  'sub': {
    'bottom': '-0.25em',
  },

  'sup': {
    'top': '-0.5em',
  },

  [`audio,
  video`]: {
    'display': 'inline-block',
  },

  'audio:not([controls])': {
    'display': 'none',
    'height': '0',
  },

  'img': {
    'border-style': 'none',
  },

  'svg:not(:root)': {
    'overflow': 'hidden',
  },

  [`button,
  input,
  optgroup,
  select,
  textarea`]: {
    'margin': '0',
  },

  [`button,
  input`]: {
    'overflow': 'visible',
  },

  [`button,
  select`]: {
    'text-transform': 'none',
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
    'border-style': 'none',
    'padding': '0',
  },

  [`button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring`]: {
    'outline': '1px dotted ButtonText',
  },

  'fieldset': {
    'border': '1px solid #c0c0c0',
    'margin': '0 2px',
    'padding': '0.35em 0.625em 0.75em',
  },

  'legend': {
    'box-sizing': 'border-box',
    'color': 'inherit',
    'display': 'table',
    'max-width': '100%',
    'padding': '0',
    'white-space': 'normal',
  },

  'progress': {
    'display': 'inline-block',
    'vertical-align': 'baseline',
  },

  'textarea': {
    'overflow': 'auto',
  },

  [`[type="checkbox"],
  [type="radio"]`]: {
    'box-sizing': 'border-box',
    'padding': '0',
  },

  [`[type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button`]: {
    'height': 'auto',
  },

  '[type="search"]': {
    '-webkit-appearance': 'textfield',
    'outline-offset': '-2px',
  },

  [`[type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration`]: {
    '-webkit-appearance': 'none',
  },

  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button',
    'font': 'inherit',
  },

  [`details,
  menu`]: {
    'display': 'block',
  },

  'summary': {
    'display': 'list-item',
  },

  'canvas': {
    'display': 'inline-block',
  },

  'template': {
    'display': 'none',
  },

  '[hidden]': {
    'display': 'none',
  },

}

function mergeRules(baseRules: Object, additionalRules: Object) {
  const mergedRules = { ...baseRules }
  Object.keys(additionalRules).forEach((key) => {
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
 *   font-family: sans-serif,
 *   line-height: 1.15,
 *   -ms-text-size-adjust: 100%,
 *   -webkit-text-size-adjust: 100%,
 * } ...
 */

function normalize(excludeOpinionated?: boolean) {
  if (excludeOpinionated) return unopinionatedRules
  return mergeRules(unopinionatedRules, opinionatedRules)
}

export default normalize
