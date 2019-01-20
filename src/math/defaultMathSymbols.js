// RPN Functions
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
  if (a < 0) return -1
  else if (a === 0) return 1
  else {
    return a * factorial(a - 1)
  }
}

export default {
  symbols: {
    '!': {
      postfix: {
        symbol: '!',
        f: factorial,
        notation: 'postfix',
        precedence: 6,
        rightToLeft: false,
        argCount: 1,
      },
      symbol: '!',
      regSymbol: '!',
    },
    '^': {
      infix: {
        symbol: '^',
        f: Math.pow, // eslint-disable-line no-restricted-properties
        notation: 'infix',
        precedence: 5,
        rightToLeft: true,
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
        rightToLeft: false,
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
        rightToLeft: false,
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
        rightToLeft: false,
        argCount: 2,
      },
      prefix: {
        symbol: '+',
        f: last,
        notation: 'prefix',
        precedence: 3,
        rightToLeft: false,
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
        rightToLeft: false,
        argCount: 2,
      },
      prefix: {
        symbol: '-',
        f: negation,
        notation: 'prefix',
        precedence: 3,
        rightToLeft: false,
        argCount: 1,
      },
      symbol: '-',
      regSymbol: '-',
    },
    ',': {
      infix: {
        symbol: ',',
        f: Array.of,
        notation: 'infix',
        precedence: 1,
        rightToLeft: false,
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
        rightToLeft: false,
        argCount: 1,
      },
      symbol: '(',
      regSymbol: '\\(',
    },
    ')': {
      postfix: {
        symbol: ')',
        f: null,
        notation: 'postfix',
        precedence: 0,
        rightToLeft: false,
        argCount: 1,
      },
      symbol: ')',
      regSymbol: '\\)',
    },
    min: {
      func: {
        symbol: 'min',
        f: Math.min,
        notation: 'func',
        precedence: 0,
        rightToLeft: false,
        argCount: 1,
      },
      symbol: 'min',
      regSymbol: 'min\\b',
    },
    max: {
      func: {
        symbol: 'max',
        f: Math.max,
        notation: 'func',
        precedence: 0,
        rightToLeft: false,
        argCount: 1,
      },
      symbol: 'max',
      regSymbol: 'max\\b',
    },
    sqrt: {
      func: {
        symbol: 'sqrt',
        f: Math.sqrt,
        notation: 'func',
        precedence: 0,
        rightToLeft: false,
        argCount: 1,
      },
      symbol: 'sqrt',
      regSymbol: 'sqrt\\b',
    },
  },
}
