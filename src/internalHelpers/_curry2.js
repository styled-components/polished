// @flow

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn: Function): Function {
  return function f2(amount: number, color: string) {
    switch (arguments.length) {
      case 0:
        return f2
      case 1:
        return (_color: string) => fn(amount, _color)
      default:
        return fn(amount, color)
    }
  }
}
