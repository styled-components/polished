// @flow
import defaultSymbolMap from './defaultMathSymbols'

const unitRegExp = /(?<![a-zA-Z])(a|an|ch|cm|em|ex|in|mm|pc|pt|px|q|rem|vh|vmax|vmin|vw)/g

// Merges additional math functionality into the defaults.
function mergeSymbolMaps(additionalSymbols?: Object): Object {
  const symbolMap = {}
  symbolMap.symbols = additionalSymbols
    ? { ...defaultSymbolMap.symbols, ...additionalSymbols.symbols }
    : { ...defaultSymbolMap.symbols }

  return symbolMap
}

function generateError(msg, match, expression) {
  const notation = match ? match.index : expression.length
  return `${msg} at ${notation}:\n${expression}\n${' '.repeat(notation)}^`
}

function exec(operators, values) {
  const op = operators.pop()
  values.push(op.f(...[].concat(...values.splice(-op.argCount))))
  return op.precedence
}

function calculate(expression: string, additionalSymbols?: Object): number {
  const symbolMap = mergeSymbolMaps(additionalSymbols)

  let match
  const operators = [symbolMap.symbols['('].prefix]
  const values = []

  const pattern = new RegExp(
    // Pattern for numbers
    `\\d+(?:\\.\\d+)?|${
      // ...and patterns for individual operators/function names
      Object.values(symbolMap.symbols)
        // longer symbols should be listed first
        .sort((a, b) => b.symbol.length - a.symbol.length)
        .map(val => val.regSymbol)
        .join('|')
    }|(\\S)`,
    'g',
  )
  pattern.lastIndex = 0 // Reset regular expression object

  let afterValue = false

  do {
    match = pattern.exec(expression)

    const [token, bad] = match || [')', undefined]
    const notNumber = symbolMap.symbols[token]
    const notNewValue = notNumber && !notNumber.prefix && !notNumber.func
    const notAfterValue = !notNumber || (!notNumber.postfix && !notNumber.infix)

    // Check for syntax errors:
    if (bad || (afterValue ? notAfterValue : notNewValue)) return generateError('Syntax error', match, expression)

    if (afterValue) {
      // We either have an infix or postfix operator (they should be mutually exclusive)
      const curr = notNumber.postfix || notNumber.infix
      do {
        const prev = operators[operators.length - 1]
        if ((curr.precedence - prev.precedence || prev.rightToLeft) > 0) break
        // Apply previous operator, since it has precedence over current one
      } while (exec(operators, values)) // Exit loop after executing an opening parenthesis or function
      afterValue = curr.notation === 'postfix'
      if (curr.symbol !== ')') {
        operators.push(curr)
        // Postfix always has precedence over any operator that follows after it
        if (afterValue) exec(operators, values)
      }
    } else if (notNumber) {
      // prefix operator or function
      operators.push(notNumber.prefix || notNumber.func)
      if (notNumber.func) {
        // Require an opening parenthesis
        match = pattern.exec(expression)
        if (!match || match[0] !== '(') return generateError('Function needs parentheses', match, expression)
      }
    } else {
      // number
      values.push(+token)
      afterValue = true
    }
  } while (match && operators.length)

  if (operators.length) {
    return generateError('Missing closing parenthesis', match, expression)
  } else if (match) {
    return generateError('Too many closing parentheses', match, expression)
  } else {
    return values.pop()
  }
}

/**
 * CSS to fully cover an area. Can optionally be passed an offset to act as a "padding".
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...cover()
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${cover()}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'position': 'absolute',
 *   'top': '0',
 *   'right: '0',
 *   'bottom': '0',
 *   'left: '0'
 * }
 */
function math(formula: string, additionalSymbols?: Object): string {
  const formulaMatch = formula.match(unitRegExp)
  if (formulaMatch) {
    if (
      formulaMatch.every(unit => unit !== formulaMatch[0])
      && formulaMatch.length > 1
    ) {
      throw new Error(
        'All values in a formula must have the same unit or be unitless.',
      )
    }
  }

  const cleanFormula = formula.replace(unitRegExp, '')
  return `${calculate(cleanFormula, additionalSymbols)}${
    formulaMatch ? formulaMatch[0] : ''
  }`
}

export default math
