/**
 * Internal helper that determines if a value is an integer.
 * @param {any} value - a given value othat may or may not be an integer.
 * @return {boolean} - a boolean value representing whether or not a value is an integer.
 */

export default function(value) {
  const IntegerRegex = /^[0-9]+$/;
  return IntegerRegex.test(value);
};
