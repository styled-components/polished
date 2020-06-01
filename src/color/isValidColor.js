// @flow

/**
 * Checks if the passed value is a valid color
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: isValidColor('#ffffff') ? '#ffffff' : 'black',
 *   background: isValidColor('test') ? 'test' : '#000000',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${isValidColor('#ffffff') ? '#ffffff' : 'black'};
 *   background: ${isValidColor('test') ? 'test' : '#000000'};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffffff";
 *   background: "#000000";
 * }
 */
export default function isValidColor(color: any): boolean {
  declare var Option: any
  const option = new Option().style
  option.color = color
  return option.color !== ''
}
