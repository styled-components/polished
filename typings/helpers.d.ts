export type Ratio =
  | number
  | "minorSecond"
  | "majorSecond"
  | "minorThird"
  | "majorThird"
  | "perfectFourth"
  | "augFourth"
  | "perfectFifth"
  | "minorSixth"
  | "goldenSection"
  | "majorSixth"
  | "minorSeventh"
  | "majorSeventh"
  | "octave"
  | "majorTenth"
  | "majorEleventh"
  | "majorTwelfth"
  | "doubleOctave";

/**
 * The directional property helper enables shorthand for direction based properties. It accepts a property and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can optionally pass a null argument for a directional value to ignore it.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'padding-top': '12px',
 *   'padding-right': '24px',
 *   'padding-bottom': '36px',
 *   'padding-left': '48px'
 * }
 */
export function directionalProperty(property: string, ...values: Array<string | null | undefined>): object;

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */
export function em(value: string | number, base?: string | number): string;

/**
 * Establish consistent measurements and spacial relationships throughout your projects by incrementing up or down a defined scale. We provide a list of commonly used scales as pre-defined variables, see below.
 * @example
 * // Styles as object usage
 * const styles = {
 *    // Increment two steps up the default scale
 *   'font-size': modularScale(2)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *    // Increment two steps up the default scale
 *   font-size: ${modularScale(2)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'font-size': '1.77689em'
 * }
 */
export function modularScale(steps: number, base?: number | string, ratio?: Ratio): string;

/**
 * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */
export function rem(value: string | number, base?: string | number): string;

/**
 * Strip the unit from a given CSS value, returning just the number. (or the original value if an invalid string was passed)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit(100px)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit(100px)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */
export function stripUnit(value: string): number | string;
