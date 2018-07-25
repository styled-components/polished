// @flow

/**
 * @property {number | string | Styles}  [ruleOrSelector]
 */
export type Styles = {
  [ruleOrSelector: string]: string | number | Styles,
}
