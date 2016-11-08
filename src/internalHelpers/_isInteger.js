/**
 * Internal helper that determines if a value is an integer.
 * @name IsInteger
 * @private
 * @param {Any} value - a value of any type.
 * @returns {Boolean} - a boolean representing whether or not the passed param is an integer.
 */

export default function(value) {
  const IntegerRegex = /^[0-9]+$/
  return IntegerRegex.test(value)
};
