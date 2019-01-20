// @flow

const unitRegExp = /(a|an|ch|cm|em|ex|(?<!s)in|mm|pc|pt|px|q|rem|vh|vmax|vmin|vw)/g

function last(...a) {
  return a[a.length - 1]
}

function negation(a) {
  return -a
}

function addition(a, b) {
  return a + b
}

function subtraction(a, b) {
  return a - b
}

function multiplication(a, b) {
  return a * b
}

function division(a, b) {
  return a / b
}

function factorial(a) {
  if (a % 1 || !(+a >= 0)) return NaN
  if (a > 170) return Infinity
  let b = 1
  while (a > 1) b *= a-- // eslint-disable-line
  return b
}

const symbolMap = {}

function defineOperator(
  symbol: string,
  f,
  notation: string = 'func',
  precedence: number = 0,
  rightToLeft: boolean = false,
) {
  // Store operators keyed by their symbol/name. Some symbols may represent
  // different usages: e.g. "-" can be unary or binary, so they are also
  // keyed by their notation (prefix, infix, postfix, func):
  symbolMap.symbols[symbol] = Object.assign(
    {},
    {
      [notation]: {
        symbol,
        f,
        notation,
        precedence,
        rightToLeft,
        argCount: 1 + (notation === 'infix'),
      },
      symbol,
      regSymbol:
        symbol.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
        + (/\w$/.test(symbol) ? '\\b' : ''), // add a break if it's a name
    },
  )
}

function generateSymbolMap(): Object {
  symbolMap.symbols = {}
  defineOperator('!', factorial, 'postfix', 6)
  // eslint-disable-next-line no-restricted-properties
  defineOperator('^', Math.pow, 'infix', 5, true)
  defineOperator('*', multiplication, 'infix', 4)
  defineOperator('/', division, 'infix', 4)
  defineOperator('+', last, 'prefix', 3)
  defineOperator('-', negation, 'prefix', 3)
  defineOperator('+', addition, 'infix', 2)
  defineOperator('-', subtraction, 'infix', 2)
  defineOperator(',', Array.of, 'infix', 1)
  defineOperator('(', last, 'prefix')
  defineOperator(')', null, 'postfix')
  defineOperator('min', Math.min)
  defineOperator('sqrt', Math.sqrt)
}

generateSymbolMap()

function calculate(expression: string): number {
  let match
  const values = []

  const operators = [symbolMap.symbols['('].prefix]

  // eslint-disable-next-line no-unused-vars
  const exec = _ => {
    const op = operators.pop()
    values.push(op.f(...[].concat(...values.splice(-op.argCount))))
    return op.precedence
  }

  const error = msg => {
    const notation = match ? match.index : expression.length
    return `${msg} at ${notation}:\n${expression}\n${' '.repeat(notation)}^`
  }

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
  let afterValue = false
  pattern.lastIndex = 0 // Reset regular expression object
  do {
    match = pattern.exec(expression)
    const [token, bad] = match || [')', undefined]

    const notNumber = symbolMap.symbols[token]

    const notNewValue = notNumber && !notNumber.prefix && !notNumber.func

    const notAfterValue = !notNumber || (!notNumber.postfix && !notNumber.infix)
    // Check for syntax errors:
    if (bad || (afterValue ? notAfterValue : notNewValue)) return error('Syntax error')
    if (afterValue) {
      // We either have an infix or postfix operator (they should be mutually exclusive)
      const curr = notNumber.postfix || notNumber.infix
      do {
        const prev = operators[operators.length - 1]
        if ((curr.precedence - prev.precedence || prev.rightToLeft) > 0) break
        // Apply previous operator, since it has precedence over current one
      } while (exec()) // Exit loop after executing an opening parenthesis or function
      afterValue = curr.notation === 'postfix'
      if (curr.symbol !== ')') {
        operators.push(curr)
        // Postfix always has precedence over any operator that follows after it
        if (afterValue) exec()
      }
    } else if (notNumber) {
      // prefix operator or function
      operators.push(notNumber.prefix || notNumber.func)
      if (notNumber.func) {
        // Require an opening parenthesis
        match = pattern.exec(expression)
        if (!match || match[0] !== '(') return error('Function needs parentheses')
      }
    } else {
      // number
      values.push(+token)
      afterValue = true
    }
  } while (match && operators.length)
  // eslint-disable-next-line no-nested-ternary
  return operators.length
    ? error('Missing closing parenthesis')
    : match
      ? error('Too many closing parentheses')
      : values.pop()
}

function math(formula: string): string {
  const match = formula.match(unitRegExp)
  if (match) {
    if (match.every(unit => unit !== match[0]) && match.length > 1) {
      throw new Error(
        'All values in a formula must have the same unit or be unitless.',
      )
    }
  }

  const cleanFormula = formula.replace(unitRegExp, '')
  return `${calculate(cleanFormula)}${match ? match[0] : ''}`
}

export default math
