// @flow

// @private
export default function capitalizeString(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
