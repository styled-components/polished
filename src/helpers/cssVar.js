// @flow
import PolishedError from '../internalHelpers/_errors'

const cssVariableRegex = /--[\S]*/g

// @private
export default function cssVar(cssVariable: string): any {
  if (!cssVariable || !cssVariable.match(cssVariableRegex)) {
    throw new PolishedError(73)
  }
  // eslint-disable-next-line no-undef
  const parsedCSSVariable = getComputedStyle(
    // eslint-disable-next-line no-undef
    document.documentElement,
  ).getPropertyValue(cssVariable)

  if (parsedCSSVariable) {
    return parsedCSSVariable
  } else {
    throw new PolishedError(74)
  }
}
