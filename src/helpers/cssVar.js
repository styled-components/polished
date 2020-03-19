// @flow
const cssVariableRegex = /--[\S]*/g

// @private
export default function cssVariableParser(arg: any): any {
  const cssVariable = cssVariableRegex.exec(arg)
  if (!cssVariable || cssVariable.length < 1) return arg
  // eslint-disable-next-line no-undef
  const parsedCSSVariable = getComputedStyle(
    // eslint-disable-next-line no-undef
    document.documentElement,
  ).getPropertyValue(cssVariable[0])
  console.log(parsedCSSVariable)
  return parsedCSSVariable === '' ? arg : parsedCSSVariable
}
