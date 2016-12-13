// @flow

/**
 * Check if a string ends with something
 */
export default function(string: string, suffix: string): boolean {
  return string.substr(-suffix.length) === suffix
}
