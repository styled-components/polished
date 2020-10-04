// @flow
import normalize from '../normalize'

describe('normalize', () => {
  it('should return rules', () => {
    expect(normalize()).toEqual([
      {
        '::-webkit-file-upload-button': {
          WebkitAppearance: 'button',
          font: 'inherit',
        },
        '[hidden]': {
          display: 'none',
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
          WebkitAppearance: 'textfield',
          outlineOffset: '-2px',
        },
        '[type="search"]::-webkit-search-decoration': {
          WebkitAppearance: 'none',
        },
        a: {
          backgroundColor: 'transparent',
        },
        'abbr[title]': {
          borderBottom: 'none',
          textDecoration: 'underline',
        },
        [`b,
    strong`]: {
          fontWeight: 'bolder',
        },
        body: {
          margin: '0',
        },
        [`button,
    html [type="button"],
    [type="reset"],
    [type="submit"]`]: {
          WebkitAppearance: 'button',
        },
        [`button,
    input`]: {
          overflow: 'visible',
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
    select`]: {
          textTransform: 'none',
        },
        [`button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring`]: {
          outline: '1px dotted ButtonText',
        },
        [`button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner`]: {
          borderStyle: 'none',
          padding: '0',
        },
        [`code,
    kbd,
    samp`]: {
          fontFamily: 'monospace, monospace',
          fontSize: '1em',
        },
        details: {
          display: 'block',
        },
        fieldset: {
          padding: '0.35em 0.625em 0.75em',
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
        html: {
          lineHeight: '1.15',
          textSizeAdjust: '100%',
        },
        img: {
          borderStyle: 'none',
        },
        legend: {
          boxSizing: 'border-box',
          color: 'inherit',
          display: 'table',
          maxWidth: '100%',
          padding: '0',
          whiteSpace: 'normal',
        },
        main: {
          display: 'block',
        },
        pre: {
          fontFamily: 'monospace, monospace',
          fontSize: '1em',
        },
        progress: {
          verticalAlign: 'baseline',
        },
        small: {
          fontSize: '80%',
        },
        sub: {
          bottom: '-0.25em',
        },
        [`sub,
    sup`]: {
          fontSize: '75%',
          lineHeight: '0',
          position: 'relative',
          verticalAlign: 'baseline',
        },
        summary: {
          display: 'list-item',
        },
        sup: {
          top: '-0.5em',
        },
        template: {
          display: 'none',
        },
        textarea: {
          overflow: 'auto',
        },
      },
      {
        'abbr[title]': {
          textDecoration: 'underline dotted',
        },
      },
    ])
  })
})
