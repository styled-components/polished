// @flow

/**
 * @property {string | number | Styles | Array<Styles>}  [ruleOrSelector]
 */
export type Styles = {
  [ruleOrSelector: string]: string | number | Styles | Array<Styles>,
}
