// @flow

function last(...a: Array<number>): number {
  return a[a.length - 1]
}

function negation(a: number): number {
  return -a
}

function addition(a: number, b: number): number {
  return a + b
}

function subtraction(a: number, b: number): number {
  return a - b
}

function multiplication(a: number, b: number): number {
  return a * b
}

function division(a: number, b: number): number {
  return a / b
}

function factorial(a: number): number {
  if (a % 1 || !(+a >= 0)) return NaN
  if (a > 170) return Infinity
  else if (a === 0) return 1
  else {
    return a * factorial(a - 1)
  }
}

function power(a: number, b: number): number {
  return a ** b
}

function sqrt(a: number): number {
  return Math.sqrt(a)
}

function max(...a: Array<number>): number {
  return Math.max(...a)
}

function min(...a: Array<number>): number {
  return Math.min(...a)
}

function comma(...a: Array<number | string>): Array<number | string> {
  return Array.of(...a)
}

const defaultMathSymbols = {
  symbols: {
    '!': {
      postfix: {
        symbol: '!',
        f: factorial,
        notation: 'postfix',
        precedence: 6,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: '!',
      regSymbol: '!',
    },
    '^': {
      infix: {
        symbol: '^',
        f: power,
        notation: 'infix',
        precedence: 5,
        rightToLeft: 1,
        argCount: 2,
      },
      symbol: '^',
      regSymbol: '\\^',
    },
    '*': {
      infix: {
        symbol: '*',
        f: multiplication,
        notation: 'infix',
        precedence: 4,
        rightToLeft: 0,
        argCount: 2,
      },
      symbol: '*',
      regSymbol: '\\*',
    },
    '/': {
      infix: {
        symbol: '/',
        f: division,
        notation: 'infix',
        precedence: 4,
        rightToLeft: 0,
        argCount: 2,
      },
      symbol: '/',
      regSymbol: '/',
    },
    '+': {
      infix: {
        symbol: '+',
        f: addition,
        notation: 'infix',
        precedence: 2,
        rightToLeft: 0,
        argCount: 2,
      },
      prefix: {
        symbol: '+',
        f: last,
        notation: 'prefix',
        precedence: 3,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: '+',
      regSymbol: '\\+',
    },
    '-': {
      infix: {
        symbol: '-',
        f: subtraction,
        notation: 'infix',
        precedence: 2,
        rightToLeft: 0,
        argCount: 2,
      },
      prefix: {
        symbol: '-',
        f: negation,
        notation: 'prefix',
        precedence: 3,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: '-',
      regSymbol: '-',
    },
    ',': {
      infix: {
        symbol: ',',
        f: comma,
        notation: 'infix',
        precedence: 1,
        rightToLeft: 0,
        argCount: 2,
      },
      symbol: ',',
      regSymbol: ',',
    },
    '(': {
      prefix: {
        symbol: '(',
        f: last,
        notation: 'prefix',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: '(',
      regSymbol: '\\(',
    },
    ')': {
      postfix: {
        symbol: ')',
        f: undefined,
        notation: 'postfix',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: ')',
      regSymbol: '\\)',
    },
    min: {
      func: {
        symbol: 'min',
        f: min,
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: 'min',
      regSymbol: 'min\\b',
    },
    max: {
      func: {
        symbol: 'max',
        f: max,
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: 'max',
      regSymbol: 'max\\b',
    },
    sqrt: {
      func: {
        symbol: 'sqrt',
        f: sqrt,
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: 'sqrt',
      regSymbol: 'sqrt\\b',
    },
  },
}

export default defaultMathSymbols
